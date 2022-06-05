import useGetGifs from '../../components/hooks/useGetGifs';
import {getDigi} from '../../helpers/getDigi'

describe('Pruebas en el helper getDigi', () => {



    test('debe traer 5 elementos por defecto', async() => {
       const gifs=await getDigi('simpsons');
       expect(gifs.length).toBe(5);
    });
    test('debe traer 10 elementos como parametro', async() => {
       const gifs=await getDigi('simpsons',10);
       expect(gifs.length).toBe(10);
    });
    



})