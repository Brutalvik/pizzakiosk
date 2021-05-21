import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../Menu/Menu.css'


const useStyles = makeStyles({
    root: {
      minWidth: 300,
      height: 350,
      borderRadius: 20,
    },
    content: {
        textAlign: 'justify',
    },
    cardhead: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    media: {
      height: 150,
    },
    button: {
        backgroundColor: '#f8aa00',
        fontWeight: 'bolder',
        fontSize: 15,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    desc: {
        fontWeight: 'normal',
        fontSize: 12,
    },
  });

function Pizzas({ cards }) {

const classes = useStyles();

const pizzas = [{
    id: 1,
    name: "Veggie Select",
    category: "veg",
    img: "https://www.killingthyme.net/wp-content/uploads/2020/09/veggie-deluxe-pizza-2.jpg",
    description: "A generous portion of specially blended tomato sauce followed by a layer of our premium mozerella cheese topped with medley of fresh green peppers, mushrooms and tomatoes",
    price: "7.99",
},
{
    id: 2,
    name: "Extravaganzza",
    category: "nonveg",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/52/3b/38/extravaganzza-feat.jpg",
    description: "Lots of pepperoni, ham, savory Italian sausage, fresh onions, fresh green peppers, fresh mushrooms and amazing black olives with extra cheese",
    price: "14.99",
},
{
    id: 3,
    name: "Brooklyn-NY",
    category: "nonveg",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c9/57/c3.jpg",
    description: "Specifically enginnered to be big and thin, and perfectly foldable, with lots of that amazing tasting pepperoni",
    price: "17.99",
},
{
    id: 4,
    name: "Veggie",
    category: "veg",
    img: "https://vegplatter.in/files/public/images/partner/menu/4/Country%20Feast%20pizza.jpg",
    description: "A medley of fresh green peppers, onion, tomatoes, mushrooms and olives with a hit of italian seasion and chilli flakes",
    price: "9.99",
}, 
{
    id: 5,
    name: "Philly Steak",
    category: "nonveg",
    img: "https://pbs.twimg.com/media/DGJr1Q8XgAIxdBH.jpg",
    description: "Loaded with tender slices of steak, onions, green peppers, mushrooms and 3 diffrent types of cheese",
    price: "15.99",
}, 
{
    id: 6,
    name: "6 Cheese Pizza",
    category: "veg",
    img: "https://files.ketodietapp.com/Blog/files/2019/10/keto-cheese-garlic-pizza-6.jpg",
    description: "Covered with Feta, provolone, cheddar, parmesan-Asiago and mozzarealla cheese, finished with a sprinkle of oregano and italian seasoning",
    price: "10.99",
}]

const pizza = pizzas.map(pizza => (
    
    <div>
        <Grid container>
            <Grid item xs={12} sm={6} md={4}>
            
            <Card className={classes.root}>
                <CardActionArea  className={classes.content}>
                    <CardMedia
                        className={classes.media}
                        image={pizza.img}
                        title="pizza"
                    />
                    <CardContent>
                        <Typography className={classes.cardhead}>
                            {pizza.name}
                        </Typography>
                        <Typography className={classes.desc}>
                            {pizza.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" className={classes.button}>
                        Add
                    </Button>
                <Typography className={classes.price}>
                    ${pizza.price}
                </Typography>
                </CardActions>
            </Card>

            </Grid>
        </Grid>
    </div>
    
))

    return (
            <div className="menu">{pizza}<br/></div>
    )
}

export default Pizzas