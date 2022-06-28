import React from 'react'
import '../styles/modal.scss'
const Modal = ({ data, open, setOpen}) => {
  return (
    open &&
    <article className='modal'>
        <div className='modal-container'>
            <h1 className="title">{data.data.name}</h1>
            <img className="container-image" src={`${data.data.thumbnail.path}.jpg`} alt="" width={500} height={500} />
            <p className='descripcion'>{data.data.description}</p>
            <p>{data.data.modified}</p>
            <button className='modal-close' onClick={()=> setOpen(false)}>X</button>
         </div>
    </article>
  )
}

export default Modal