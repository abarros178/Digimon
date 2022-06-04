import { useState, useEffect } from 'react'
import useGetDataBase from '../hooks/useGetFirebase'
import AgregarBusqueda from './AgregarBusqueda'
import ContenedorBD from './ContenedorBD'
import GifContenedor from './GifContenedor'

const GifApp = ({ busqueda = [] }) => {
  const [controlDB, setControlDB] = useState(false)

  const [valoresBusqueda, setValoresBusqueda] = useState(busqueda)
  const { arrayData, cargando } = useGetDataBase(controlDB, setControlDB)
  useEffect(() => {
    console.log(valoresBusqueda);

  }, [valoresBusqueda])

  return (
    <>
      <div className='container'>
        <h2>Aplicacion de Gifs</h2>
        <AgregarBusqueda setValoresBusqueda={setValoresBusqueda} />
        <hr />
        <ol>
          {
            valoresBusqueda.map((valorBusqueda) => (
              <GifContenedor
                key={valorBusqueda}
                valorBusqueda={valorBusqueda}
                arrayData={arrayData}
                setControlDB={setControlDB}
              />
            ))
          }

          <div >
            {
              arrayData?.map(item => (
                <ContenedorBD key={item.valorBusqueda}{...item} setControlDB={setControlDB} />
              ))
            }
          </div>
        </ol>
      </div>
    </>
  )
}

export default GifApp