import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


const useGetGifs = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        gifs: [],
        cargando: true,
    });

    

    useEffect(() => {
        getGifs(valorBusqueda)
            .then((imgs) => {
                setEstado({
                    gifs: imgs,
                    cargando: false,
                });
            })

    }, [])
    return estado;

}

export default useGetGifs