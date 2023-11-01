import React, { useState } from 'react'

function Contador() {
    const [counter, setCounter]= useState(0)
    const aumentar = () => {
        setNumero(numero + 1)
    }

    const disminuir = () => {
        setNumero(numero - 1)
    }
    
return (
    <div>
        <p>Usted ha echo {counter} veces click en el botón</p>
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={aumentar}>Aumentar</button>
    </div>
)
}

export default Contador