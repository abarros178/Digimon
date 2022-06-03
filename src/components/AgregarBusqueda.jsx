import React, { useState } from 'react'
import { getAll } from '../helpers/getAll';
import useGetallDigi from '../hooks/useGetallDigi';
import GifContenedor from './GifContenedor';


const AgregarBusqueda = ({setValoresBusqueda}) => {
  const [valorBusqueda, setValorBusqueda] = useState('');
  const { digi, cargando } = useGetallDigi()
  
  

  const handleChange = (e) => {
    setValorBusqueda(e.target.value)

  }

  const envioBusqueda = async(e) => {
    e.preventDefault();

    if(!valorBusqueda.trim().length>0){
      alert('Debe rellenar el campo')
      return
    }
    setValoresBusqueda(valor=>[valorBusqueda,...valor])
    setValorBusqueda('')
    
  }

  return (
    <>
      <form onSubmit={envioBusqueda}>
        <input type="text"
          value={valorBusqueda}
          onChange={handleChange} />
        {/* <button type='submit'>Buscar</button> */}
      </form>
    <p>{valorBusqueda}</p>

    {cargando && <p>Cargando</p>}
      <div className='card-grid animate__animated animate__bounceInUp'>

       {  
          digi.map((digi) => (
            <ul>
            <li>{digi.name}</li>
            </ul>

          ))
        } 


      </div>


      
    </>
  ) 
}

export default AgregarBusqueda