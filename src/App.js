import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css'; // Asegúrate de tener un archivo CSS para tus estilos

function App() {
  return (
    <div className="App">
      <div className="datos">
        <div className="inputRow">
          <label>Nombre:</label>
          <input type="text" className="inputField" />
        </div>
        <div className="inputRow">
          <label>Edad:</label>
          <input type="text" className="inputField" />
        </div>
        <div className="inputRow">
          <label>País:</label>
          <input type="text" className="inputField" />
        </div>
        <div className="inputRow">
          <label>Cargo:</label>
          <input type="text" className="inputField" />
        </div>
        <div className="inputRow">
          <label>Años:</label>
          <input type="text" className="inputField" />
        </div>
      </div>
    </div>
  );
}

export default App;
