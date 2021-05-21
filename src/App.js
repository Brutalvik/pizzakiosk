import React from 'react'
import Menu from './Menu/Menu'
import Modal from 'react-modal'

//to get rid of the error in the console window.
Modal.setAppElement('#root')
//
const App = () => 
    <div>
        <Menu/>
    </div>

export default App