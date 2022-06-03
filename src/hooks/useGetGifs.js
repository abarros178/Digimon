import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { saveBd } from '../helpers/saveBd';


const useGetGifs = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        digi: [],
        cargando: true,
    });

    

    useEffect(() => {
        getGifs(valorBusqueda)
            .then((imgs) => {
                saveBd({valorBusqueda,imgs})
                setEstado({
                    digi: imgs,
                    cargando: false,
                }); 
            })

    }, [])
    return estado;

}

export default useGetGifs