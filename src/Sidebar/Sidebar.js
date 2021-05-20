import React, { Component } from 'react'
import Items from './Items'
import './Sidebar.css'
import buttercrust from '../Assets/butter.png'

export class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             css: "hidden"
        }
    }

    //function to change the css for sidenav
    toggleNav() {
        if(this.state.css === "hidden") {
            this.setState ({
                css: "show"
            })
        }
        else {
            this.setState ({
                css: "hidden"
            })
        }
    }
    
    render() {
        return (
        <div>
                <div className="sidebar">
                <div className="logo-div">
                    <img className="logo" src={buttercrust} alt="headlogo"/>
                </div>
                <div>
                    
                </div>
                <div>
                    
                    <button className="sidenav" onClick={() => this.toggleNav()}>Build Your Pizza</button>
                    <div className={this.state.css}>
                        <Items/>
                    </div>
                </div>
                <div>
                    <button className="btn-sidemenu">Done</button>
                </div>
        </div> 
            </div>
        )
    }
}

export default Sidebar
