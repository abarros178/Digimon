import React from 'react'

const GifItem = ({name, img,level}) => {
  return (
    <div className='card animate__animated animate__fadeInDown'>
        <img src={img} alt = {name}/>
        <p>{level}</p>
    </div>
  )
}

export default GifItem    
