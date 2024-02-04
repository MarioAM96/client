import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

import React, { useState, useEffect } from 'react';
import './App.css'; // Asegúrate de tener un archivo CSS para tus estilos
import Axios from "axios";


function App() {

  useEffect(() => {
    // Llama a la función getEmpleados al iniciar la aplicación
    getEmpleados();
  }, []);

  const [empleados, setEmpleados] = useState([]);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

  //FUNCIONAMIENTO SIMPLE
  /*const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      edad:edad,
      pais:pais,
      cargo:cargo,
      anios:anios
    }).then(()=>{
      alert("Empleado registrado");
    })
  }*/

  const addEmpleados = () => {
    Axios.post("http://localhost:3001/empleados", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios
    })
      .then((response) => {
        if (response.data.status) {
          // Success alert with the response message
          Swal.fire({
            icon: 'success',
            title: 'Empleado registrado',
            text: response.data.message
          });
        } else {
          // Error alert with the response message
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.data.message
          });
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al procesar la solicitud'
        });
      });
  };


  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados")
      .then((response) => {
        setEmpleados(response.data);
        //getEmpleados();
      })
      .catch((error) => {
        // Handle network or other errors
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al procesar la solicitud'
        });
      });
  };

  const handleEditar = (empleadoId) => {
    setEditingEmployeeId(empleadoId);
  };

  const handleSaveChanges = (empleadoId) => {
    // Implement logic to save changes (update the empleado object in the state, API call, etc.)
    // For simplicity, let's assume you have a function like updateEmpleado in your code
    // updateEmpleado(empleadoId, updatedData);
    setEditingEmployeeId(null); // Exit editing mode
  };

  // Define the handleCancelarEdicion function to handle canceling the editing mode
  const handleCancelarEdicion = () => {
    setEditingEmployeeId(null); // Exit editing mode
  };

  const handleEliminar = (empleadoId) => {
    // Implement logic for deleting employee with the given id
    console.log(`Eliminar empleado con ID: ${empleadoId}`);
  };

  return (
    <div className="App">
      <div className="datos">
        <div className="inputRow">
          <label>Nombre:</label>
          <input type="text" className="inputField" onChange={(event) => setNombre(event.target.value)} />
        </div>
        <div className="inputRow">
          <label>Edad:</label>
          <input type="number" className="inputField" onChange={(event) => setEdad(event.target.value)} />
        </div>
        <div className="inputRow">
          <label>País:</label>
          <input type="text" className="inputField" onChange={(event) => setPais(event.target.value)} />
        </div>
        <div className="inputRow">
          <label>Cargo:</label>
          <input type="text" className="inputField" onChange={(event) => setCargo(event.target.value)} />
        </div>
        <div className="inputRow">
          <label>Años:</label>
          <input type="number" className="inputField" onChange={(event) => setAnios(event.target.value)} />
        </div>
        <div className="inputRow">
          <button className="registerButton" onClick={addEmpleados}>
            Registrar
          </button>
        </div>
      </div>

      <div className="tabla">
        <h2>Lista de Empleados</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>País</th>
              <th>Cargo</th>
              <th>Años</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{editingEmployeeId === empleado.id ? <input type="text" value={empleado.nombre} /> : empleado.nombre}</td>
                <td>{editingEmployeeId === empleado.id ? <input type="number" value={empleado.edad} /> : empleado.edad}</td>
                <td>{editingEmployeeId === empleado.id ? <input type="text" value={empleado.pais} /> : empleado.pais}</td>
                <td>{editingEmployeeId === empleado.id ? <input type="text" value={empleado.cargo} /> : empleado.cargo}</td>
                <td>{editingEmployeeId === empleado.id ? <input type="number" value={empleado.anios} /> : empleado.anios}</td>
                <td>
                  {editingEmployeeId === empleado.id ? (
                    <>
                      <button onClick={() => handleSaveChanges(empleado.id)}>Guardar</button>
                      <button onClick={() => handleCancelarEdicion()}>Cancelar</button>
                    </>
                  ) : (
                    <button className="editar" onClick={() => handleEditar(empleado.id)}>Editar</button>

                  )}
                  <button className="eliminar" onClick={() => handleEliminar(empleado.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );



}


export default App;
