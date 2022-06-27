import React from 'react'

const Modal = ({children}) => {
  return (
    <article className='modal is-open'>
        <div className='modal-container'></div>
        {children}
        <h1 className="title">{props.data.name}</h1>
            <img className="container-image" src={`${props.data.thumbnail.path}.jpg`} alt="" width={500} height={500} />
            <p className='descripcion'>{props.data.description}</p>
            <p>{props.data.modified}</p>

    </article>
  )
}

export default Modal