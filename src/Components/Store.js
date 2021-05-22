import { makeAutoObservable, toJS } from "mobx";

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    pizzas = [{
        id: 1,
        name: "Veggie Select",
        category: "veg",
        img: "https://www.killingthyme.net/wp-content/uploads/2020/09/veggie-deluxe-pizza-2.jpg",
        description: "A generous portion of specially blended tomato sauce followed by a layer of our premium mozerella cheese topped with medley of fresh green peppers, mushrooms and tomatoes",
        price: "7.99",
        quantity: 0
    },
    {
        id: 2,
        name: "Extravaganzza",
        category: "nonveg",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/52/3b/38/extravaganzza-feat.jpg",
        description: "Lots of pepperoni, ham, savory Italian sausage, fresh onions, fresh green peppers, fresh mushrooms and amazing black olives with extra cheese",
        price: "14.99",
        quantity: 0
    },
    {
        id: 3,
        name: "Brooklyn-NY",
        category: "nonveg",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c9/57/c3.jpg",
        description: "Specifically enginnered to be big and thin, and perfectly foldable, with lots of that amazing tasting pepperoni",
        price: "17.99",
        quantity: 0
    },
    {
        id: 4,
        name: "Veggie",
        category: "veg",
        img: "https://vegplatter.in/files/public/images/partner/menu/4/Country%20Feast%20pizza.jpg",
        description: "A medley of fresh green peppers, onion, tomatoes, mushrooms and olives with a hit of italian seasion and chilli flakes",
        price: "9.99",
        quantity: 0
    },
    {
        id: 5,
        name: "Philly Steak",
        category: "nonveg",
        img: "https://pbs.twimg.com/media/DGJr1Q8XgAIxdBH.jpg",
        description: "Loaded with tender slices of steak, onions, green peppers, mushrooms and 3 diffrent types of cheese",
        price: "15.99",
        quantity: 0
    },
    {
        id: 6,
        name: "6 Cheese Pizza",
        category: "veg",
        img: "https://files.ketodietapp.com/Blog/files/2019/10/keto-cheese-garlic-pizza-6.jpg",
        description: "Covered with Feta, provolone, cheddar, parmesan-Asiago and mozzarealla cheese, finished with a sprinkle of oregano and italian seasoning",
        price: "10.99",
        quantity: 0
    }]
    
    add_pizza = (index) => {
        this.pizzas[index].quantity = this.pizzas[index].quantity + 1
    }
}

export const store = window.store = new Store()
window.toJS = toJS