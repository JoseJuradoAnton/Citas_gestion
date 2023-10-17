import React, { Fragment, useState } from 'react'

const Formulario = () => {

    //Crear State de Citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

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
            console.log('datos vacios !!!')
            return
        }
    }

    return (
        <Fragment>
            <div className="formulario">
                <h2 className='form_title'>Crear Cita</h2>

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
                    <button className='btm-form'>Registrar</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Formulario