import React, { useState } from 'react'
import GifItem from './GifItem ';
import useGetGifs from '../hooks/useGetGifs';
import getFirebase from '../helpers/getFirebase';

const GifContenedor = ({ valorBusqueda,arrayData,setControlDB }) => {
  useGetGifs(valorBusqueda,arrayData,setControlDB)

  return (
    <>
     {/*  <h3>Busqueda {valorBusqueda}</h3>
      {cargando && <p>Cargando</p>}
      <div id="contenedor" className=' animate__animated animate__bounceInUp'>

        {

          digi?.map((gif) => (
            <div id='contenedor2' className="card-group" style={{ "width": "15rem" }}>
            <GifItem
              key={gif.name}
              {...gif} />
            </div>      
          ))
        }


      </div> */}
    </>
  )
}

export default GifContenedor;