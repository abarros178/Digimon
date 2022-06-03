import React from 'react'

const GifItem = ({name, img}) => {
  return (
    <div className='card animate__animated animate__fadeInDown'>
        <img src={img} alt = {name}/>
    </div>
  )
}

export default GifItem