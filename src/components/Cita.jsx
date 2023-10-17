import React from 'react'


const Cita = ({ cita }) => {
    return (
        <div className='media'>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
        </div>
    )
}

export default Cita