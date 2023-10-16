import React, { Fragment } from 'react'
import './App.css'
import Formulario from './components/Formulario'

function App() {


  return (
    <Fragment>

      <div>
        <h1>Adminsitrador de pacientes</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario />
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
