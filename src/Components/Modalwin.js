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
import CircularProgress from '@material-ui/core/CircularProgress';

//Styles
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
    root: {
        width: '100%',
      },
});

const Modalwin = observer(() => {

    const classes = useStyles();

    const [modalIsOpen, setModalState] = useState(true)
    //STATES
    //Main Content Display
    const [content, setContent] = useState(true)
    //Button Text
    const [buttonText, setButtonText] = useState('Pay')
    //Button Color
    const [buttonColor, setButtonColor] = useState('#f8aa00')
    //Spinner
    const [loading, setLoading] = useState(false)
    //Ticket Number
    const [ticket, setTicket] = useState (false)
    //Order Status
    const [order, setOrder] = useState (true)
    //Message Status
    const [bar, setBar] = useState (false)
    //Steps
    const [activeStep, setActiveStep] = useState(0)
    //Assistance Text
    const [text, setText] = useState('Contacting...')
    const [status, setStatus] = useState(false);
    //Button Controller
    const [btn, setBtn] = useState(false)

    //Stepper Text
    function getStepContent(step) {
        switch (step) {
            case 0:
                return 'Processing Your Order..';
            case 1:
                return 'Preparing Your Food.....';
            case 2:
                return 'Done !';
            default:
                return '';
        }
      }
    
    const assistance = async() => {
        setBtn(true)
        setContent(false)
        setLoading(true)
        setStatus(true)
        await new Promise(r => setTimeout(r, 4000))
        setText('A Rep will be with you shortly.')
        await new Promise(r => setTimeout(r, 15000))
        setText('Closing...')
        await new Promise(r => setTimeout(r, 3000))
        setLoading(false)
        setBtn(false)
        setModalState(false)   
    }
    
    //Dynamic Pay Button Function
    const buttonClick = async(buttonText) => {
        if (buttonText === 'Pay'){
            if (sub === 0) {
                setBtn(true)
                setContent(false)
                setLoading(true)
                await new Promise(r => setTimeout(r, 2000))
                setLoading(false)
                setOrder(false)
                setBtn(false)
                setButtonText('Back')
            }
            else {
                setBtn(true)
                setContent(false)
                setLoading(true)
                setBar(true)
                await new Promise(r => setTimeout(r, 3000))
                setActiveStep(0)
                await new Promise(r => setTimeout(r, 3000))
                setActiveStep(1)
                await new Promise(r => setTimeout(r, 3000))
                setActiveStep(2)
                await new Promise(r => setTimeout(r, 2000))
                setBar(false)
                setBtn(false)
                setLoading(false)
                setTicket(true)
                setTimeout(setContent(true), 4000)
                setButtonColor('#539e3c')
                setButtonText('Print')
            } 
        }
        else if(buttonText === ('Print'))
        {
            setContent(false)
            setLoading(true)
            await new Promise(r => setTimeout(r, 2000))
            setModalState(false)
        }
        else {
            setModalState(false)
        }
            
    }

    //Sutotal Array
    const subtotal = [ 
        store.pizzas.filter(pizza => pizza.quantity > 0).map(pizza => pizza.price * pizza.quantity),
        store.pastas.filter(pasta => pasta.quantity > 0).map(pasta => pasta.price * pasta.quantity),
        store.pop.filter(popper => popper.quantity > 0).map(popper => popper.price * popper.quantity),
        store.breads.filter(bread => bread.quantity > 0).map(bread => bread.price * bread.quantity),
        store.drinks.filter(drink => drink.quantity > 0).map(drink => drink.price * drink.quantity),
        store.deserts.filter(desert => desert.quantity > 0).map(desert => desert.price * desert.quantity)
    ]

    //Subtotal Calcuation
    var sub = parseFloat(subtotal.map(
        subtotal => subtotal.map(sub => sub).reduce((a, b) => a+b, 0))
        .reduce((a, b) => a+b, 0).toFixed(2))
    
    //Taxes
    var GST = 0.05
    var QST = 0.09975
    
    //Product Selections from Array
    const cartData = (product) => {
        return {product}
    }

    //Product Selections Array
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

    //Main
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
                    {/* CONDITIONAL RENDERING OF SELECTED CONTENT */}
                    {/* TABLE DATA */}
                    {content && (
                    <TableContainer className={classes.tableContainer} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableHead}>Your Selections: </TableCell>
                                        {ticket && (<Paper style={{backgroundColor:"green", fontWeight:"bold"}}>  
                                        Ticket # {(Math.random() * 5454).toFixed(0)}
                                        </Paper>)}
                                        
                                    </TableRow>
                                </TableHead>
                                {/* Selections    */}
                                {cart.map(cart =>
                                    <div>
                                        {cart.product}
                                    </div>
                                )}
                                {/* Subtotal, Taxes and Total */}
                                <TableRow>
                                    <TableCell className={classes.tableFoot}>
                                        Subtotal
                                    </TableCell>
                                    <TableCell>
                                        $ {sub}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableFoot}>
                                        QST
                                    </TableCell>
                                    <TableCell>
                                    $ {(sub * QST).toFixed(2)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableFoot}>
                                        GST
                                    </TableCell>
                                    <TableCell>
                                    $ {(sub * GST).toFixed(2)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableFoot}>
                                        Total
                                    </TableCell>
                                    <TableCell>
                                       $ {(sub + (sub * QST) + (sub * GST)).toFixed(2)}
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer> )}
                        {/* Conditional rendring for No Order */}
                        {!order && (
                            <div className="order">
                                <h1>No Order Placed</h1>
                                <h4>Please select from our menu to place an order</h4>
                            </div>
                        )}
                        {/* Circular Loading Progress */}
                        {loading && (
                        <div className="circle">
                        <CircularProgress size={68} color={"honeydew"}>
                        </CircularProgress>
                        </div>)}
                        {/* Conditional Progress */}
                        {bar &&  (
                            <div>
                                <h2>
                                {getStepContent(activeStep)}
                                </h2>
                            </div>
                        )}
                        {status && (
                            <div>
                                <h2>
                                    {text}
                                </h2>
                            </div>
                        )}
                    {/* Footer Buttons */}
                    <div className="modalbtn">
                        <button disabled={btn} className="btn-sidemenu" onClick={() => assistance()}>Assistance</button>
                        <button disabled={btn} className="btn-sidemenu" onClick={() => buttonClick(buttonText)} style={{backgroundColor: buttonColor}}>{buttonText}</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
})

export default Modalwin