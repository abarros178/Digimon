import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


const useGetGifs = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        digi: [],
        cargando: true,
    });

    

    useEffect(() => {
        getGifs(valorBusqueda)
            .then((imgs) => {
                setEstado({
                    digi: imgs,
                    cargando: false,
                });
            })

    }, [])
    return estado;

}

export default useGetGifs