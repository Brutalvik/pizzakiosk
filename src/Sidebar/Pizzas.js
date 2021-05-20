import React from 'react'

function Pizzas() {

    const pizza = [{
                        id: 1,
                        name: "Veggie Select",
                        category: "veg",
                        description: "A generous portion of specially blended tomato sauce followed by a layer of our premium mozerella cheese topped with medley of fresh green peppers, mushrooms and tomatoes"
                    },
                    {
                        id: 2,
                        name: "Extravaganzza",
                        category: "nonveg",
                        description: "Lots of pepperoni, ham, savory Italian sausage, fresh onions, fresh green peppers, fresh mushrooms and amazing black olives with extra cheese"
                    },
                    {
                        id: 3,
                        name: "Brooklyn-NY",
                        category: "nonveg",
                        description: "Specifically enginnered to be big and thin, and perfectly foldable, with lots of that amazing tasting pepperoni"
                    },
                    {
                        id: 4,
                        name: "Veggie",
                        category: "veg",
                        description: "A medley of fresh green peppers, onion, tomatoes, mushrooms and olives with a hit of italian seasion and chilli flakes"
                    }, 
                    {
                        id: 5,
                        name: "Philly Steak",
                        category: "nonveg",
                        description: "Loaded with tender slices of steak, onions, green peppers, mushrooms and 3 diffrent types of cheese"
                    }, 
                    {
                        id: 6,
                        name: "6 Cheese Pizza",
                        category: "veg",
                        description: "Covered with Feta, provolone, cheddar, parmesan-Asiago and mozzarealla cheese, finished with a sprinkle of oregano and italian seasoning"
                    }]

    const eachPizza = pizza.map(pizza => <p>{pizza}</p>)
    return (
        <div>
            {eachPizza}
        </div>
    )
}

export default Pizzas
