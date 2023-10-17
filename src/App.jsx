import React, { Fragment, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  //Arreglo de cits
  const [citas, setCitas] = useState([])

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
    console.log(cita)
  }

  return (
    <Fragment>

      <div>
        <h1>Adminsitrador de pacientes</h1>

        <div className="container">
          <div className="row">
            <div className="one-half">
              <Formulario
                crearCita={crearCita}
              />
            </div>
            <div className="one-half">
              <h2 className='form_title'>Administra tus Citas</h2>
              {
                citas.map(cita => (
                  <Cita
                    key={cita.id}
                    cita={cita}
                  />
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </Fragment>

  )
}

export default App
