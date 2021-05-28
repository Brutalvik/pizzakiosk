import { makeAutoObservable, toJS } from "mobx";

class Store {
    constructor() {
        makeAutoObservable(this)
    }


//pizzas
pizzas = [{
    id: 1,
    name: "Veggie Select",
    category: "veg",
    img: "https://www.killingthyme.net/wp-content/uploads/2020/09/veggie-deluxe-pizza-2.jpg",
    description: "A generous portion of specially blended tomato sauce followed by a layer of our premium mozerella cheese topped with medley of fresh green peppers, mushrooms and tomatoes",
    price: 7.99,
    quantity: 0
},
{
    id: 2,
    name: "Extravaganzza",
    category: "nonveg",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/52/3b/38/extravaganzza-feat.jpg",
    description: "Lots of pepperoni, ham, savory Italian sausage, fresh onions, fresh green peppers, fresh mushrooms and amazing black olives with extra cheese",
    price: 14.99,
    quantity: 0
},
{
    id: 3,
    name: "Brooklyn-NY",
    category: "nonveg",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c9/57/c3.jpg",
    description: "Specifically enginnered to be big and thin, and perfectly foldable, with lots of that amazing tasting pepperoni",
    price: 17.99,
    quantity: 0
},
{
    id: 4,
    name: "Veggie",
    category: "veg",
    img: "https://vegplatter.in/files/public/images/partner/menu/4/Country%20Feast%20pizza.jpg",
    description: "A medley of fresh green peppers, onion, tomatoes, mushrooms and olives with a hit of italian seasion and chilli flakes",
    price: 9.99,
    quantity: 0
},
{
    id: 5,
    name: "Philly Steak",
    category: "nonveg",
    img: "https://pbs.twimg.com/media/DGJr1Q8XgAIxdBH.jpg",
    description: "Loaded with tender slices of steak, onions, green peppers, mushrooms and 3 diffrent types of cheese",
    price: 15.99,
    quantity: 0
},
{
    id: 6,
    name: "6 Cheese Pizza",
    category: "veg",
    img: "https://files.ketodietapp.com/Blog/files/2019/10/keto-cheese-garlic-pizza-6.jpg",
    description: "Covered with Feta, provolone, cheddar, parmesan-Asiago and mozzarealla cheese, finished with a sprinkle of oregano and italian seasoning",
    price: 10.99,
    quantity: 0
}]

//pastas
pastas = [
    {
        id: 1,
        name: "Chicken Alfredo",
        category: "nonveg",
        img: "https://www.jessicagavin.com/wp-content/uploads/2019/08/chicken-alfredo-8-1200.jpg",
        description: "Grilled 100% all white meat chicken and Alfredo sauce baked to a creamy goodness with penne pasta",
        price: 7.99,
        quantity: 0
    },
    {
        id: 2,
        name: "Veg Alfredo",
        category: "veg",
        img: "https://www.laaloosh.com/wp-content/uploads/2014/06/vegetable-alfredo.jpg",
        description: "Grilled 100% vegetables and Alfredo sauce baked to a creamy goodness with fuselli pasta",
        price: 5.99,
        quantity: 0
    },
    {
        id: 3,
        name: "Sphagetti Cabonara",
        category: "nonveg",
        img: "https://bellyfull.net/wp-content/uploads/2020/03/Spaghetti-Carbonara-blog-2.jpg",
        description: "Sphagetty cooked gently, topping slices of bacon and chicken, creamy, luscious, and bursting with flavor",
        price: 10.99,
        quantity: 0
    }]

//poppers
pop = [
{
    id: 1,
    name: "Jalapeneo Poppers - 6 PCS",
    category: "veg",
    img: "https://www.thegunnysack.com/wp-content/uploads/2020/08/Jalapeno-Popper-Bites-Recipe-720x720.jpg",
    description: "Crunchy Crusted Jalapeno, deep fried to perfection, and filled with cheedar.  ",
    price: 3.99,
    quantity: 0
},
{
    id: 2,
    name: "Chicken Poppers - 6 PCS",
    category: "nonveg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_knuVyvDB7QHkBemLxHm4_Xk9okR6haTpA&usqp=CAU",
    description: "Cripsy outside, super soft inside, fried to perfection with barbeque sauce",
    price: 5.99,
    quantity: 0
},
{
    id: 3,
    name: "Mozerella Poppers",
    category: "veg",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/c9/ed/22/mozzarella-poppers-with.jpg",
    description: "Deep fried mozerella, with a yummy twist. Choice of sauce, and fresh herbs",
    price: 4.99,
    quantity: 0
},
{
    id: 4,
    name: "Mushroom Poppers",
    category: "veg",
    img: "https://w2.chabad.org/media/images/1010/okns10106602.jpg",
    description: "Mouth watering mushrooms with lemon zest and various spices and fresh herbs",
    price: 7.99,
    quantity: 0
}]

//breads
breads = [
    {
        id: 1,
        name: "Butter Bread Sticks",
        category: "veg",
        img: "https://www.jocooks.com/wp-content/uploads/2011/10/grissini-1.jpg",
        description: "Finely flavored breadsticks, dipped in butter and sprinkled with sesame seeds.",
        price: 3.99,
        quantity: 0
    },
    {
        id: 2,
        name: "Stuffed Garlic Bread",
        category: "veg",
        img: "https://thecozycook.com/wp-content/uploads/2019/05/BEST-Cheesy-Homemade-Garlic-Bread-Recipe-2.jpg",
        description: "Grarlic bread stuffed with mozerella, cheddar and various herbs",
        price: 5.99,
        quantity: 0
    }]

//drinks
drinks = [
    {
        id: 1,
        name: "Choice of Pop",
        category: "veg",
        img: "https://forecourtretailer.com/wp-content/uploads/2020/03/Cans_LINEUP_5_V2-2.png",
        description: "Choose from Coca Cola, Coca Cola Zero, Coca Cola Diet, Fanta & Sprite served chilled  ",
        price: 1.99,
        quantity: 0
    },
    {
        id: 2,
        name: "Iced Tea",
        category: "veg",
        img: "https://image2.commarts.com/images1/8/6/1/16831_102_1160_LTE0NTczNDE5OTItMjExMDgwNjIyMg.jpg",
        description: "Get drenched in flavours of Straberry, Orange, Lemonade, Pinapple, or Tea with Twist",
        price: 2.49,
        quantity: 0
    }]
deserts = [
    {
        id: 1,
        name: "Choco Lava",
        category: "veg",
        img: "https://handletheheat.com/wp-content/uploads/2014/01/Handle-the-Heat-Chocolate-Lava-Cakes-FInals-11.jpg",
        description: "A volcanic eruption of flavours filled with choclate and a hint of strawberry",
        price: 4.49,
        quantity: 0
    },
    {
        id: 2,
        name: "Cheese Cake",
        category: "veg",
        img: "https://www.thespruceeats.com/thmb/cjUcbK6aMG4TtaG4PNZZCLhd3Xo=/1500x844/smart/filters:no_upscale()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
        description: "Super creamy and soft cheese, on a cripsy bed of happiness",
        price: 5.99,
        quantity: 0
    }]

    add_product = (product, index) => {
        product[index].quantity++ 
    }

    rem_product = (product, index) => {
        product[index].quantity--
    }
}

export const store = window.store = new Store()
window.toJS = toJS