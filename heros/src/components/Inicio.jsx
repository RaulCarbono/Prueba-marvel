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
            <h1> Heros </h1>
            <div className="personajes-container">
                    {personajes.data.results.map((personajes, index) => (
                        <Personajes key={index} data={personajes} />

                    ))}
            </div>
        </div>
        </>
    )
}

export default Inicio