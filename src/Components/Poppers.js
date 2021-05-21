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


function Poppers({ cards }) {

    const classes = useStyles();

    const pop = [
        {
            id: 1,
            name: "Jalapeneo Poppers - 6 PCS",
            category: "veg",
            img: "https://www.thegunnysack.com/wp-content/uploads/2020/08/Jalapeno-Popper-Bites-Recipe-720x720.jpg",
            description: "Crunchy Crusted Jalapeno, deep fried to perfection, and filled with cheedar.  ",
            price: "3.99"
        },
        {
            id: 2,
            name: "Chicken Poppers - 6 PCS",
            category: "nonveg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_knuVyvDB7QHkBemLxHm4_Xk9okR6haTpA&usqp=CAU",
            description: "Cripsy outside, super soft inside, fried to perfection with barbeque sauce",
            price: "5.99"
        },
        {
            id: 3,
            name: "Mozerella Poppers",
            category: "veg",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/c9/ed/22/mozzarella-poppers-with.jpg",
            description: "Deep fried mozerella, with a yummy twist. Choice of sauce, and fresh herbs",
            price: "4.99"
        },
        {
            id: 4,
            name: "Mushroom Poppers",
            category: "veg",
            img: "https://w2.chabad.org/media/images/1010/okns10106602.jpg",
            description: "Mouth watering mushrooms with lemon zest and various spices and fresh herbs",
            price: "7.99"
        }]

        const poppers = pop.map(popper => (

            <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                
                <Card className={classes.root}>
                    <CardActionArea className={classes.content}>
                        <CardMedia
                            className={classes.media}
                            image={popper.img}
                            title="poppers"/>
                            
                        <CardContent>
                            <Typography className={classes.cardhead}>
                                {popper.name}
                            </Typography>
                            <Typography className={classes.desc}>
                                {popper.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" className={classes.button}>
                            Add
                        </Button>
                    <Typography className={classes.price}>
                        ${popper.price}
                    </Typography>
                    </CardActions>
                </Card>
    
                </Grid>
            </Grid>
        </div>

        ))

    return (
        <div className="menu">
            {poppers}
        </div>
    )
}

export default Poppers

