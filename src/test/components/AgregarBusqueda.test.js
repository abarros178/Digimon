import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import AgregarBusqueda from '../../components/AgregarBusqueda.jsx'



describe('Pruebas en <AgregarBusqueda/>', () => {



    test('debe cambiar la caja de texto', () => {
        const funcion_prueba = jest.fn();
        const wrapper = shallow(<AgregarBusqueda setValoresBusqueda={funcion_prueba}/>);
        const input = wrapper.find('input');
        const value='Hola mundo';
        input.simulate('change',{target: {value}});
        expect(wrapper.find('p').text().trim()).toBe('Hola mundo')
    });
    test('no debe llamar a la funcion setValoresBusqueda', () => {
        const funcion_prueba = jest.fn();
        const wrapper = shallow(<AgregarBusqueda setValoresBusqueda={funcion_prueba}/>);
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(funcion_prueba).not.toHaveBeenCalled();
    });
    test('debe llamar a la funcion setValoresBusqueda', () => {
        const funcion_prueba = jest.fn();
        const wrapper = shallow(<AgregarBusqueda setValoresBusqueda={funcion_prueba}/>);
        const value='Simpsonn';
        wrapper.find('input').simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(funcion_prueba).toHaveBeenCalled();
        expect(funcion_prueba).toHaveBeenCalledTimes(1);
        expect(funcion_prueba).toHaveBeenCalledWith(expect.any(Function))
        expect(wrapper.find('input').prop('value')).toBe('');
    });




})
