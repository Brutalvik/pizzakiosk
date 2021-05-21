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


function Drinks({ cards }) {

    const classes = useStyles();

    const drinks = [
        {
            id: 1,
            name: "Choice of Pop",
            category: "veg",
            img: "https://forecourtretailer.com/wp-content/uploads/2020/03/Cans_LINEUP_5_V2-2.png",
            description: "Choose from Coca Cola, Coca Cola Zero, Coca Cola Diet, Fanta & Sprite served chilled  ",
            price: "1.99"
        },
        {
            id: 2,
            name: "Iced Tea",
            category: "veg",
            img: "https://image2.commarts.com/images1/8/6/1/16831_102_1160_LTE0NTczNDE5OTItMjExMDgwNjIyMg.jpg",
            description: "Get drenched in flavours of Straberry, Orange, Lemonade, Pinapple, or Tea with Twist",
            price: "2.49"
        }]

        const drink = drinks.map(drink => (

            <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                
                <Card className={classes.root}>
                    <CardActionArea className={classes.content}>
                        <CardMedia
                            className={classes.media}
                            image={drink.img}
                            title="drinks"/>
                            
                        <CardContent>
                            <Typography className={classes.cardhead}>
                                {drink.name}
                            </Typography>
                            <Typography className={classes.desc}>
                                {drink.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" className={classes.button}>
                            Add
                        </Button>
                    <Typography className={classes.price}>
                        ${drink.price}
                    </Typography>
                    </CardActions>
                </Card>
    
                </Grid>
            </Grid>
        </div>

        ))

    return (
        <div className="menu">
            {drink}
        </div>
    )
}

export default Drinks

