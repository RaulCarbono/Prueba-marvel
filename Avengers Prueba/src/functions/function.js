import axios from "axios";

export const allAvengers = async(state) => {
    const peticion = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=707afba86d616c312a81a10f7c1a0457&hash=f206181185ae113d228a1d8c6401d7d2')
    state(peticion.data)
}

export const infoAvengers = async(urls) =>{
    const result = await axios.get(urls)
    return result.data
}