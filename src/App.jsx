import React, { Fragment, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'

function App() {

  //Arreglo de cits
  const [citas, setCitas] = useState([])

  const crearCita = cita => {
    console.log(cita)
  }

  return (
    <Fragment>

      <div>
        <h1>Adminsitrador de pacientes</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario
                crearCita={crearCita}
              />
            </div>
            <div className="one-half column">

            </div>
          </div>
        </div>

      </div>
    </Fragment>

  )
}

export default App
