import { useState, useEffect } from 'react'
import AgregarBusqueda from './AgregarBusqueda'
import GifContenedor from './GifContenedor'

const GifApp = ({busqueda=['Koromon']}) => {
  const [valoresBusqueda, setValoresBusqueda] = useState(busqueda)
  useEffect(() => {
    console.log(valoresBusqueda);

  }, [valoresBusqueda])

  return (
    <>
      <h2>Aplicacion de Gifs</h2>
      <AgregarBusqueda setValoresBusqueda={setValoresBusqueda} />
      <hr />
      <ol>
        {
          valoresBusqueda.map((valorBusqueda,index) => (
            <GifContenedor
              key={`${index}${valorBusqueda}`}
              valorBusqueda={valorBusqueda}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifApp