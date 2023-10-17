import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {

    //Crear State de Citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState(false)

    //Funcion que captura datos de input
    const actualizarState = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value

        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita

    const submitCita = e => {
        e.preventDefault();

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {

            setError(true)
            return
        }
        setError(false);
        cita.id = uuidv4();

        crearCita(cita)
    }

    return (
        <Fragment>
            <div className="formulario">
                <h2 className='form_title'>Crear Cita</h2>

                {error ? <p> Todos los datos deben estar completos </p> : null}

                <form onSubmit={submitCita}>
                    <label>Nombre Mascota</label>
                    <input
                        type="text"
                        name='mascota'
                        className='u-full-width'
                        placeholder='Nombre Mascota'
                        onChange={actualizarState}
                        value={mascota}
                    />

                    <label>Nombre Dueño</label>
                    <input
                        type="text"
                        name='propietario'
                        className='u-full-width'
                        placeholder='Nombre dueño de la mascota'
                        onChange={actualizarState}
                        value={propietario}
                    />

                    <label>fecha</label>
                    <input
                        type="date"
                        name='fecha'
                        className='u-full-width'
                        onChange={actualizarState}
                        value={fecha}
                    />

                    <label>Hora</label>
                    <input
                        type="time"
                        name='hora'
                        className='u-full-width'
                        onChange={actualizarState}
                        value={hora}
                    />

                    <label>Sintomas</label>
                    <textarea
                        className='u-full-width'
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}

                    ></textarea>
                    <button>Registrar</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Formulario