import React, { useState } from 'react'
import buttercrust from '../Assets/butter.png'
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Pizzas from '../Components/Pizzas'
import Pasta from '../Components/Pasta'
import Popper from '../Components/Poppers';
import Breads from '../Components/Breads';
import Drinks from '../Components/Drinks';
import Deserts from '../Components/Deserts';
import Modalwin from '../Components/Modalwin';
import Default from '../Components/Default';
import butter from '../Assets/logo.png'
import './Menu.css'
import '../Styles.css'

//Sidenav Font Size
const theme = createMuiTheme({
    typography: {
      fontSize: 15
    },
  });


function Sidebar (cardData) {
    const [active, setActive] = useState("default")
    console.log(active)
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
                <Typography  onClick={() => setActive("pasta")} className="sidenav">Pasta</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography onClick={() => setActive("popper")} className="sidenav">Poppers</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography onClick={() => setActive("breads")} className="sidenav">Breads</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography onClick={() => setActive("drinks")} className="sidenav">Drinks</Typography>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={theme}>
                <Typography onClick={() => setActive("deserts")} className="sidenav">Deserts</Typography>
            </ThemeProvider>
            <br/>
            <button onClick={() => setActive("modalwin")} className="btn-sidemenu">Done</button>
            </div>
            <img className="small" src={butter} alt="logo"/>
        </div>
        <div>
            {active === "default" && <Default card={cardData}/>}
            {active === "pizza" && <Pizzas card={cardData}/>}
            {active === "pasta" && <Pasta card={cardData}/>}
            {active === "popper" && <Popper card={cardData}/>}
            {active === "breads" && <Breads card={cardData}/>}
            {active === "drinks" && <Drinks card={cardData}/>}
            {active === "deserts" && <Deserts card={cardData}/>}
        </div>
        {active === "modalwin" && <Modalwin modalCard={cardData}/>}
    </div>
        )
    }

export default Sidebar
