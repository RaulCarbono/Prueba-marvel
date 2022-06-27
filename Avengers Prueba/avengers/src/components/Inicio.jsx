import React, {useEffect, useState} from "react";
import { allAvengers } from "../functions/function";
import Personajes from './Personajes'


const Inicio =  () => {
    const [personajes, setPersonajes] = useState(null)
    useEffect(() => {
        allAvengers(setPersonajes)
    }, [])

    if (!personajes) {
        return "cargando...!"
    }
    return (
        <>
        <div className="app-container">
          <h1> Heroes disponibles </h1>
            <div className="personajes-container">
             <div className="all-container">
                {personajes.data.results.map((personajes, index) => (
                    <Personajes key={index} data={personajes}/>
            ))}
            {console.log(personajes.data.results)}
            </div>
          </div>  
        </div>
        </>
    )
}

export default Inicio