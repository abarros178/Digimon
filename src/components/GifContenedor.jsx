import React, { useState } from 'react'
import GifItem from './GifItem ';
import useGetGifs from '../hooks/useGetGifs';
import getFirebase from '../helpers/getFirebase';

const GifContenedor = ({ valorBusqueda }) => {
  const { digi, cargando } = useGetGifs(valorBusqueda)

  return (
    <>
      <h3>Busqueda {valorBusqueda}</h3>
      {cargando && <p>Cargando</p>}
      <div id="contenedor" className='card-grid animate__animated animate__bounceInUp'>

        {
          digi?.map((gif) => (
            
            <GifItem
              key={gif.name}
              {...gif} />

          ))
        }


      </div>
    </>
  )
}

export default GifContenedor;