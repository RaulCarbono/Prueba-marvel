import React from 'react'
import '../styles/modal.scss'
const Modal = ({ data, open, setOpen}) => {
  return (
    open &&
    <div className='modal'>
        <div className='modal-container'>
            <h1 className="title">{data.data.name}</h1><br />
            <img className="container-image" src={`${data.data.thumbnail.path}.jpg`} alt=""  />
            <p>{data.data.modified}</p>
            <p className='descripcion'>{data.data.description}</p>
            <button className='modal-close' onClick={()=> setOpen(false)}>X</button>
         </div>
    </div>
  )
}

export default Modal