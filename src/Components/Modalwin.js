import React, {useState} from 'react'
import Modal from 'react-modal'
import {MdClear} from "react-icons/md";
import '../Menu/Menu.css'
import {observer} from 'mobx-react-lite';
import {store} from './Store';


const Modalwin = observer(({cards}) => {

    const [modalIsOpen, setModalState] = useState(true)

    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalState(false)}>
                <div className="modal">
                    <div className="mdclear">
                        <MdClear onClick={() => setModalState(false)} />
                    </div>
                    <div className="modalheader">
                    <h1>Thank you !</h1>
                    <h4>Enjoy Your Pizza</h4>
                    </div>
                    <div className="price-menu">
                        <table>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        <tr>
                                <td>
                                    {store.pizzas
                                    .filter(pizza => pizza.quantity > 0)
                                    .map(pizza => 
                                    <div>{pizza.name} </div>)}
                                </td>
                                <td>
                                    {store.pizzas
                                    .filter(pizza => pizza.quantity > 0)
                                    .map(pizza => 
                                    <div>{pizza.quantity} </div>)}
                                </td>
                                <td>
                                    {store.pizzas
                                    .filter(pizza => pizza.quantity > 0)
                                    .map(pizza => 
                                    <div>${pizza.price * pizza.quantity} </div>)}
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    {store.pastas
                                    .filter(pastas => pastas.quantity > 0)
                                    .map(pasta => 
                                    <div>{pasta.name} </div>)}
                                </td>
                                <td>
                                    {store.pastas
                                    .filter(pasta => pasta.quantity > 0)
                                    .map(pasta => 
                                    <div>{pasta.quantity} </div>)}
                                </td>
                                <td>
                                    {store.pastas
                                    .filter(pasta => pasta.quantity > 0)
                                    .map(pasta => 
                                    <div>${pasta.price * pasta.quantity} </div>)}
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    {store.pop
                                    .filter(popper => popper.quantity > 0)
                                    .map(popper => 
                                    <div>{popper.name} </div>)}
                                </td>
                                <td>
                                    {store.pop
                                    .filter(popper => popper.quantity > 0)
                                    .map(popper => 
                                    <div>{popper.quantity} </div>)}
                                </td>
                                <td>
                                    {store.pop
                                    .filter(popper => popper.quantity > 0)
                                    .map(popper => 
                                    <div>${popper.price * popper.quantity} </div>)}
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    {store.breads
                                    .filter(bread => bread.quantity > 0)
                                    .map(bread => 
                                    <div>{bread.name} </div>)}
                                </td>
                                <td>
                                    {store.breads
                                    .filter(bread => bread.quantity > 0)
                                    .map(bread => 
                                    <div>{bread.quantity} </div>)}
                                </td>
                                <td>
                                    {store.breads
                                    .filter(bread => bread.quantity > 0)
                                    .map(bread => 
                                    <div>${bread.price * bread.quantity} </div>)}
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    {store.drinks
                                    .filter(drink => drink.quantity > 0)
                                    .map(drink => 
                                    <div>{drink.name} </div>)}
                                </td>
                                <td>
                                    {store.drinks
                                    .filter(drink => drink.quantity > 0)
                                    .map(drink => 
                                    <div>{drink.quantity} </div>)}
                                </td>
                                <td>
                                    {store.drinks
                                    .filter(drink => drink.quantity > 0)
                                    .map(drink => 
                                    <div>${drink.price * drink.quantity} </div>)}
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    {store.deserts
                                    .filter(desert => desert.quantity > 0)
                                    .map(desert => 
                                    <div>{desert.name} </div>)}
                                </td>
                                <td>
                                    {store.deserts
                                    .filter(desert => desert.quantity > 0)
                                    .map(desert => 
                                    <div>{desert.quantity} </div>)}
                                </td>
                                <td>
                                    {store.deserts
                                    .filter(desert => desert.quantity > 0)
                                    .map(desert => 
                                    <div>${desert.price * desert.quantity} </div>)}
                                </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th>Subtotal</th>
                            
                        </tr>
                        </table>
                    </div>
                    <div className="modalbtn">
                        <button className="btn-sidemenu" onClick={() => setModalState(false)}>Assistance</button>
                        <button className="btn-sidemenu" onClick={() => setModalState(false)}>Pay</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
})

export default Modalwin