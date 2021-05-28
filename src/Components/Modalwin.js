import React, {useState} from 'react'
import Modal from 'react-modal'
import {MdClear} from "react-icons/md";
import '../Menu/Menu.css'
import {observer} from 'mobx-react-lite';
import {store} from './Store';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    tableContainer: {
        marginTop: 30,
        maxWidth: 500,
        marginBottom: 30,
    },
    tableHead: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    tableFoot: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

const Modalwin = observer(() => {

    const classes = useStyles();

    const [modalIsOpen, setModalState] = useState(true)

    const subtotal = [ 
        store.pizzas.filter(pizza => pizza.quantity > 0).map(pizza => pizza.price * pizza.quantity),
        store.pastas.filter(pasta => pasta.quantity > 0).map(pasta => pasta.price * pasta.quantity),
        store.pop.filter(popper => popper.quantity > 0).map(popper => popper.price * popper.quantity),
        store.breads.filter(bread => bread.quantity > 0).map(bread => bread.price * bread.quantity),
        store.drinks.filter(drink => drink.quantity > 0).map(drink => drink.price * drink.quantity),
        store.deserts.filter(desert => desert.quantity > 0).map(desert => desert.price * desert.quantity)
    ]

    const cartData = (product) => {
        return {product}
    }

    const cart = [
        cartData(store.pizzas.filter(pizza => pizza.quantity > 0).map(pizza => 
            <TableBody>
                <TableCell>{pizza.name}</TableCell>
                <TableCell>x{pizza.quantity}</TableCell>
                <TableCell>$ {pizza.price * pizza.quantity}</TableCell>
            </TableBody>)),
        cartData(store.pastas.filter(pasta => pasta.quantity > 0).map(pasta => 
            <TableBody>
                <TableCell>{pasta.name}</TableCell>
                <TableCell>x{pasta.quantity}</TableCell>
                <TableCell>$ {pasta.price * pasta.quantity}</TableCell>
            </TableBody>)),
        cartData(store.pop.filter(popper => popper.quantity > 0).map(popper => 
            <TableBody>
                <TableCell>{popper.name}</TableCell>
                <TableCell>x{popper.quantity}</TableCell>
                <TableCell>$ {popper.price * popper.quantity}</TableCell>
            </TableBody>)),
        cartData(store.breads.filter(bread => bread.quantity > 0).map(bread => 
            <TableBody>
                <TableCell>{bread.name}</TableCell>
                <TableCell>x{bread.quantity}</TableCell>
                <TableCell>$ {bread.price * bread.quantity}</TableCell>
            </TableBody>)),
        cartData(store.drinks.filter(drink => drink.quantity > 0).map(drink => 
            <TableBody>
                <TableCell>{drink.name}</TableCell>
                <TableCell>x{drink.quantity}</TableCell>
                <TableCell>$ {drink.price * drink.quantity}</TableCell>
            </TableBody>)),
        cartData(store.deserts.filter(desert => desert.quantity > 0).map(desert => 
            <TableBody>
                <TableCell>{desert.name}</TableCell>
                <TableCell>x{desert.quantity}</TableCell>
                <TableCell>$ {desert.price * desert.quantity}</TableCell>
            </TableBody>))
    ]


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
                        <TableContainer className={classes.tableContainer} component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tableHead}>Your Selections: </TableCell>
                                    </TableRow>
                                </TableHead>

                                {cart.map(cart =>
                                    <div>
                                        {cart.product}
                                    </div>
                                )}
                                <TableRow>
                                    <TableCell className={classes.tableFoot}>
                                        Subtotal
                                    </TableCell>
                                    <TableCell>
                                        $ {subtotal.map(
                                            subtotal => subtotal.map(sub => sub).reduce((a, b) => a+b, 0))
                                            .reduce((a, b) => a+b, 0)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableFoot}>
                                        Tax
                                    </TableCell>
                                    <TableCell>Tax Amount</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableFoot}>
                                        Total
                                    </TableCell>
                                    <TableCell>Total Amount</TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
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