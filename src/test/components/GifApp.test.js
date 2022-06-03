import GifApp from '../../components/GifApp';
import {getGifs} from '../../helpers/getGifs'
import { shallow } from 'enzyme'
import GifContenedor from '../../components/GifContenedor';

describe('Pruebas en <GifApp/>', () => {
    test('debe traer 10 elementos por defecto con dos busquedas', async() => {
       const busquedas=['simpsons', 'Rick and Morty'];
       const wrapper= shallow(<GifApp busqueda={busquedas}/>)
       expect(wrapper.find('GifContenedor').length).toBe(2)
       
       
    });
})