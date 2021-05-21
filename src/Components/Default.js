import React from 'react'
import '../Menu/Menu.css'
import butter from '../Assets/logo.png'

function Default({cards}) {
    return (
        <div className="logo">
            <img src={butter} alt="logo"/>
            <h2>To Begin, Please make a selection.</h2>
        </div>
    )
}

export default Default
