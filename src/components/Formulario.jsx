import React, { Fragment } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <div className="formulario">

                <h2>Crear Cita</h2>
                <form>
                    <label>Nombre Mascota</label>
                    <input
                        type="text"
                        name='mascota'
                        className='u-full-width'
                        placeholder='Nombre Mascota'
                    />

                    <label>Nombre Dueño</label>
                    <input
                        type="text"
                        name='propietario'
                        className='u-full-width'
                        placeholder='Nombre dueño de la mascota'
                    />

                    <label>fecha</label>
                    <input
                        type="date"
                        name='fecha'
                        className='u-full-width'
                    />

                    <label>Nombre Mascota</label>
                    <input
                        type="time"
                        name='hola'
                        className='u-full-width'
                    />
                </form>
            </div>
        </Fragment>
    )
}

export default Formulario