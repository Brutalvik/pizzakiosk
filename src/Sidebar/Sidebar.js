import React from 'react'
import buttercrust from '../Assets/butter.png'
import styles from './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
             <div>
                 <img className="logo" src={buttercrust} />
             </div>
            <div>
               <h4>Select Options</h4>
            </div>
            <div></div>
            <div>
                <h4>Easy Peasy</h4>
            </div>
            <div>
                <h4>Pizza Crust</h4>
            </div>
            <div>
                <h4>Pizza Toppings</h4>
            </div>
            <div>
                <h4>Sides</h4>
            </div>
            <div>
                <h4>Drinks</h4>
            </div>
        </div>
    )
}

export default Sidebar
