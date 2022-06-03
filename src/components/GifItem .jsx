import React from 'react'

const GifItem = ({name, img,level}) => {
  return (
    <div className='card animate__animated animate__fadeInDown'>
        <img src={img} alt = {name}/>
        <p>El level es: {level}</p>
    </div>
  )
}

export default GifItem    
