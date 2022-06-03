import { renderHook } from '@testing-library/react-hooks';
import useGetGifs from '../../hooks/useGetGifs';


describe('Pruebas en el custom hooks <useGetGifs/>',()=>{
    test('debe retornar el estado inicial del hook',()=>{
        const {result}=renderHook(()=>useGetGifs('simpsons'));
        const {gifs,cargando}=result.current
        expect(gifs).toEqual([])
        expect(cargando).toBe(true)
        
        
    });
    test('debe retornar los elementos del valor de la busqueda',async()=>{
        const {result,waitForNextUpdate}=renderHook(()=>useGetGifs('simpsons'));
        
        await waitForNextUpdate();
        const {gifs,cargando}=result.current;
        
        expect(gifs.length).toBe(5)
        expect(cargando).toBe(false)
    });

    

})
