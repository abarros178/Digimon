import React from 'react'

const GifItem = ({ name, img, level ,eliminar}) => {
  return (

    <div >
      <div className='card animate__animated animate__fadeInDown'>
        <img src={img} class="card-img-top" alt={name} />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p>El level es: {level}</p>
          <button onClick={() => eliminar()} className='btn btn-warning'>Eliminar</button>
        </div>
      </div>
    </div>






  )
}

export default GifItem    
