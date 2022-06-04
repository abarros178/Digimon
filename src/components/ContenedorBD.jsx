import React from 'react'
import { borrarDB } from '../helpers/borrarDB';
import GifItem from './GifItem ';

const ContenedorBD = ({ imgs, id, setControlDB }) => {

  const eliminar = () => {
    borrarDB(id)
    setControlDB(true)
    console.log(id);
  }

  return (
    <div className='d-inline-flex p-2 bd-highlight'>
      {

        imgs.map(item => (
          <div className="card-group" style={{ "width": "15rem" }} key={item.name}>
            <GifItem {...item} eliminar={eliminar}/>
          </div>

        ))
      }
      
    </div>
  )
}

export default ContenedorBD