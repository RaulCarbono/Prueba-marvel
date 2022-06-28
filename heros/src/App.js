import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Personajes from './components/Personajes';
import './styles/style.scss'

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/personajes' element={<Personajes/>}/>
        <Route path='/*' element = {<h1>No encontrado</h1>} />
      </Routes>
    </div>
  );
}

export default App;
