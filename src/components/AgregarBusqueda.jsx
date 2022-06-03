import React, { useState } from 'react'
import GifContenedor from './GifContenedor';


const AgregarBusqueda = ({setValoresBusqueda}) => {
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [listaGifs, setListaGifs] = useState([]);


  

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
      
    </>
  ) 
}

export default AgregarBusqueda