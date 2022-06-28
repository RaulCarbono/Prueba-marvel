import React, {useEffect, useState} from "react";
import { allAvengers } from "../functions/function";
import Personajes from './Personajes'
import Modal from "./Modal";


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
            {/*<Modal />*/}
        </div>
        </>
    )
}

export default Inicio