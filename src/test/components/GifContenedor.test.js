//cuando hay hooks lo que tenemos que hacer es simular la respuesta de ese hook.
import {shallow} from 'enzyme'
import '@testing-library/jest-dom';
import DigiContenedor from '../../components/DigiContenedor.jsx'
import useGetGifs from '../../components/hooks/useGetGifs';
jest.mock('../../components/hooks/useGetGifs');


describe('Pruebas en <DigiContenedor/>',() => {

    
    test('debe mostrar los gifs al cargar el hook', () =>{

        const gifs = [
            {
                id:'1',
                url: 'https://roberto.morales/imagen1.jpg',
                title: 'imagen  uno'
            },
            {
                id:'2',
                url: 'https://roberto.morales/imagen2.jpg',
                title: 'imagen  dos'
            },
            {
                id:'3',
                url: 'https://roberto.morales/imagen3.jpg',
                title: 'imagen  tres'
            }
        ]
    
        useGetGifs.mockReturnValue({
            gifs: gifs,
            cargando: false
        })
    
        const valorBusqueda = 'simpson';
        const wrapper = shallow( <DigiContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(false)

    });

    test('debe mostrar cargando', () =>{

        
    
        useGetGifs.mockReturnValue({
            gifs: [],
            cargando: true
        })
    
        const valorBusqueda = 'simpson';
        const wrapper = shallow( <DigiContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(true)

    });
    test('la cantida de elementos DigiItem coincide con el numero de resultados', () =>{

        const gifs = [
            {
                id:'1',
                url: 'https://roberto.morales/imagen1.jpg',
                title: 'imagen  uno'
            },
            {
                id:'2',
                url: 'https://roberto.morales/imagen2.jpg',
                title: 'imagen  dos'
            },
            {
                id:'3',
                url: 'https://roberto.morales/imagen3.jpg',
                title: 'imagen  tres'
            }
        ]
    
        useGetGifs.mockReturnValue({
            gifs: gifs,
            cargando: false
        })
    
        const valorBusqueda = 'simpson';
        const wrapper = shallow( <DigiContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('DigiItem').length).toBe(3)

    });

    

   
})