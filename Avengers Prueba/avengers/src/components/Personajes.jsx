import React, {useState, useEffect} from "react";
//import { infoAvengers } from "../functions/function";
import '../styles/style.scss'

const Personajes = (props) => {
    
    return (
        
        <div className='container'>
            <h1>{props.data.name}</h1>
            <div>
            <img src={`${props.data.thumbnail.path}.jpg`} alt="" width={250} height={250} />
            </div>
        </div>
        
    )
}

export default Personajes