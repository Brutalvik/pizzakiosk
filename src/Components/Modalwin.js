import React, { useState } from 'react'
import Modal from 'react-modal'
import { MdClear } from "react-icons/md";
import '../Menu/Menu.css'

function Modalwin({cards}) {

    const [modalIsOpen, setModalState] = useState(true)
    
    return (
        <div >
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalState(false)}>
            <div className="modal">
                    <div className="mdclear">
                        <MdClear onClick={() => setModalState(false)}/>
                    </div>
                <h1>Thank you !</h1>
                <h4>Enjoy Your Pizza</h4>
            </div>
            <div className="modalbtn">
                <button className="btn-sidemenu" onClick={() => setModalState(false)}>Assistance</button>
                <button className="btn-sidemenu" onClick={() => setModalState(false)}>Pay</button>
            </div>
            </Modal>
        </div>
    )
}

export default Modalwin
