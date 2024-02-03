import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener un archivo CSS para tus estilos

function App() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

  const mostrarDatos = ()=>{
    alert(nombre);
  }

  return (
    <div className="App">
      <div className="datos">
        <div className="inputRow">
          <label>Nombre:</label>
          <input type="text" className="inputField" onChange={(event)=>setNombre(event.target.value)}/>
        </div>
        <div className="inputRow">
          <label>Edad:</label>
          <input type="number" className="inputField" onChange={(event)=>setEdad(event.target.value)} />
        </div>
        <div className="inputRow">
          <label>País:</label>
          <input type="text" className="inputField" onChange={(event)=>setPais(event.target.value)} />
        </div>
        <div className="inputRow">
          <label>Cargo:</label>
          <input type="text" className="inputField" onChange={(event)=>setCargo(event.target.value)} />
        </div>
        <div className="inputRow">
          <label>Años:</label>
          <input type="number" className="inputField" onChange={(event)=>setAnios(event.target.value)} />
        </div>
        <div className="inputRow">
          <button className="registerButton" onClick={mostrarDatos}>Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
