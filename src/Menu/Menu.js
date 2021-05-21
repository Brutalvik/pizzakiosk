import React, { useState } from 'react'
import buttercrust from '../Assets/butter.png'
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Pizzas from '../Components/Pizzas'
import Pasta from '../Components/Pasta'
import Modalwin from '../Components/Modalwin';
import './Menu.css'
import '../Styles.css'

//Sidenav Font Size
const theme = createMuiTheme({
    typography: {
      fontSize: 15
    },
  });


function Sidebar (pizzaData, pastaData, modalData) {
    const [active, setActive] = useState("pizza")

    return (
        <div className="frame">
        <div className="sidebar">
            <div className="logo-div">
                <img className="logo" src={buttercrust} alt="headlogo"/>
            </div>
            <div className="sidenav-div">
            <ThemeProvider theme={theme}>
                <Typography onClick={() => setActive("pizza")} className="sidenav">Pizza</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography  onClick={() => setActive("pasta")}className="sidenav">Pasta</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography className="sidenav">Poppers</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography className="sidenav">Breads</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography className="sidenav">Drinks</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography className="sidenav">Deserts</Typography>
            </ThemeProvider>
            <br/>
            <button onClick={() => setActive("modalwin")} className="btn-sidemenu">Done</button>
            </div>
        </div>
        <div>
            {active === "pizza" && <Pizzas pizzaCard={pizzaData}/>}
            {active === "pasta" && <Pasta pastaCard={pastaData}/>}
        </div>
        {active === "modalwin" && <Modalwin modalCard={modalData}/>}
    </div>
        )
    }

export default Sidebar
