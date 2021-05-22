import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../Menu/Menu.css'
import {store} from './Store';
import {observer} from 'mobx-react-lite';


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



const Pizzas = observer(({cards}) => {

    const classes = useStyles();
    const pizza = store.pizzas.map((pizza, pizza_index) => (


        <Card key={pizza.id} className={classes.root}>
            <CardActionArea className={classes.content}>
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
            <CardActions style={{display: 'grid', gridTemplateColumns: '80px auto 80px'}}>
                <Typography className={classes.price}>
                    ${pizza.price}
                </Typography>
                Quantity: {store.pizzas[pizza_index].quantity}
                <Button onClick={() => store.add_pizza(pizza_index)} size="large" className={classes.button}>
                    Add
                    </Button>

            </CardActions>
        </Card>
    ))

    return (
        <div className="menu" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridTemplateRows: '300px',
            gap: '20px'
        }}>{pizza}<br /></div>
    )
})

export default Pizzas








