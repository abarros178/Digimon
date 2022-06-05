import {shallow} from 'enzyme'
import DigiItem from '../../components/DigiItem '


describe('Pruebas en <DigiItem/>',()=>{
    test('debe tener la imagen con las propiedades url y alt',()=>{
        const titulo='Titulo prueba';
        const url = 'http://roberto.morales/images.jpg';
        const wrapper=shallow(<DigiItem title={titulo} url={url}/>);
        expect(wrapper.find('img').prop('alt')).toBe(titulo);
        expect(wrapper.find('img').prop('src')).toBe(url);
        
    });

    test('debe tener la el efecto animate_fadeIn',()=>{
        const titulo='Titulo prueba';
        const url = 'http://roberto.morales/images.jpg';
        const wrapper=shallow(<DigiItem title={titulo} url={url}/>);
        const aux=wrapper.find('div').prop('className')
        expect(aux.includes('animate__fadeInDown')).toBe(true);
        
    })

})
