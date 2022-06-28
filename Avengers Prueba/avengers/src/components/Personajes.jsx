import React, {useState, useEffect} from "react";
//import { infoAvengers } from "../functions/function";
import '../styles/style.scss'

const Personajes = (props) => {
    
    return (
          <div className="container" onClick={() => localStorage.getItem("datos")}>
            <img src={`${props.data.thumbnail.path}.jpg`} alt="" />
         </div>
    )
}

export default Personajes