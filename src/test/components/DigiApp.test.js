import GifApp from '../../components/GifApp';
import {getDigi} from '../../helpers/getDigi'
import { shallow } from 'enzyme'
import DigiContenedor from '../../components/DigiContenedor';

describe('Pruebas en <GifApp/>', () => {
    test('debe traer 10 elementos por defecto con dos busquedas', async() => {
       const busquedas=['simpsons', 'Rick and Morty'];
       const wrapper= shallow(<GifApp busqueda={busquedas}/>)
       expect(wrapper.find('DigiContenedor').length).toBe(2)
       
       
    });
})