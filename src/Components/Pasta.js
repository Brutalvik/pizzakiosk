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


function Pasta({ pastaCard }) {

    const classes = useStyles();

    const pastas = [
        {
            id: 1,
            name: "Chicken Alfredo",
            category: "nonveg",
            description: "Grilled 100% all white meat chicken and Alfredo sauce baked to a creamy goodness with penne pasta",
            price: "7.99"
        },
        {
            id: 1,
            name: "Veg Alfredo",
            category: "veg",
            description: "Grilled 100% vegetables and Alfredo sauce baked to a creamy goodness with fuselli pasta",
            price: "7.99"
        }]

        const pasta = pastas.map(pasta => (

            <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                
                <Card className={classes.root}>
                    <CardActionArea className={classes.content}>
                        <CardMedia
                            className={classes.media}
                            image="./vegeselect.jpg"
                            title="pizza"/>
                            
                        <CardContent>
                            <Typography className={classes.cardhead}>
                                {pasta.name}
                            </Typography>
                            <Typography className={classes.desc}>
                                {pasta.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" className={classes.button}>
                            Add
                        </Button>
                    <Typography className={classes.price}>
                        ${pasta.price}
                    </Typography>
                    </CardActions>
                </Card>
    
                </Grid>
            </Grid>
        </div>

        ))

    return (
        <div className="menu">
            {pasta}
        </div>
    )
}

export default Pasta

