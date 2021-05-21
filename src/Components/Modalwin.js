import React, { useState } from 'react'
import Modal from 'react-modal'
import '../Menu/Menu.css'

function Modalwin(modalCard) {

    const [modalIsOpen, setModalState] = useState(true)
    
    return (
        <div >
            <Modal isOpen={modalIsOpen}>
            <div className="modal">
                <h1>Thank you !</h1>
                <h4>Enjoy Your Pizza</h4>
            </div>
            <div className="modalbtn">
                <button className="btn-sidemenu" onClick={() => setModalState(false)}>Pay</button>
            </div>
            </Modal>
        </div>
    )
}

export default Modalwin
