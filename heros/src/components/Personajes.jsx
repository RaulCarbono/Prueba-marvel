import React, {useState} from "react";
import '../styles/style.scss'
import Modal from "./Modal";

const Personajes = (props) => {
    const [open, setOpen] = useState(false)

    return (
          <>
          <div className="container" onClick={() => setOpen(true)}>
            <img src={`${props.data.thumbnail.path}.jpg`} alt="" />
            <h1>{props.data.name}</h1>
         </div>
         <Modal data={props} open={open} setOpen ={setOpen} />
         </>
        
    )
}

export default Personajes