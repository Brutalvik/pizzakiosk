import React from 'react'
import './Sidebar.css'

const types = ["Hand Tossed", " Thin Crust", "Handmade Pan", "Gluten Free Crust"]

const pizzaTypes = types.map(types =>  <div className="shows"><p>{types}</p></div>)

const items = () => {
    return (
        <div>
           {pizzaTypes}
        </div>
    )
}

export default items
