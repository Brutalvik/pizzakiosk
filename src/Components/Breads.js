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


function Breads({ cards }) {

    const classes = useStyles();

    const breads = [
        {
            id: 1,
            name: "Butter Bread Sticks",
            category: "veg",
            img: "https://www.jocooks.com/wp-content/uploads/2011/10/grissini-1.jpg",
            description: "Finely flavored breadsticks, dipped in butter and sprinkled with sesame seeds.",
            price: "3.99"
        },
        {
            id: 2,
            name: "Stuffed Garlic Bread",
            category: "veg",
            img: "https://thecozycook.com/wp-content/uploads/2019/05/BEST-Cheesy-Homemade-Garlic-Bread-Recipe-2.jpg",
            description: "Grarlic bread stuffed with mozerella, cheddar and various herbs",
            price: "5.99"
        }]

        const bread = breads.map(bread => (

            <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                
                <Card className={classes.root}>
                    <CardActionArea className={classes.content}>
                        <CardMedia
                            className={classes.media}
                            image={bread.img}
                            title="breads"/>
                            
                        <CardContent>
                            <Typography className={classes.cardhead}>
                                {bread.name}
                            </Typography>
                            <Typography className={classes.desc}>
                                {bread.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" className={classes.button}>
                            Add
                        </Button>
                    <Typography className={classes.price}>
                        ${bread.price}
                    </Typography>
                    </CardActions>
                </Card>
    
                </Grid>
            </Grid>
        </div>

        ))

    return (
        <div className="menu">
            {bread}
        </div>
    )
}

export default Breads

