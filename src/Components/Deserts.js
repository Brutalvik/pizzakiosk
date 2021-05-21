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


function Deserts({ cards }) {

    const classes = useStyles();

    const deserts = [
        {
            id: 1,
            name: "Choco Lava",
            category: "veg",
            img: "https://handletheheat.com/wp-content/uploads/2014/01/Handle-the-Heat-Chocolate-Lava-Cakes-FInals-11.jpg",
            description: "A volcanic eruption of flavours filled with choclate and a hint of strawberry",
            price: "4.49"
        },
        {
            id: 2,
            name: "Cheese Cake",
            category: "veg",
            img: "https://www.thespruceeats.com/thmb/cjUcbK6aMG4TtaG4PNZZCLhd3Xo=/1500x844/smart/filters:no_upscale()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
            description: "Super creamy and soft cheese, on a cripsy bed of happiness",
            price: "5.99"
        }]

        const desert = deserts.map(desert => (

            <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                
                <Card className={classes.root}>
                    <CardActionArea className={classes.content}>
                        <CardMedia
                            className={classes.media}
                            image={desert.img}
                            title="desert"/>
                            
                        <CardContent>
                            <Typography className={classes.cardhead}>
                                {desert.name}
                            </Typography>
                            <Typography className={classes.desc}>
                                {desert.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" className={classes.button}>
                            Add
                        </Button>
                    <Typography className={classes.price}>
                        ${desert.price}
                    </Typography>
                    </CardActions>
                </Card>
    
                </Grid>
            </Grid>
        </div>

        ))

    return (
        <div className="menu">
            {desert}
        </div>
    )
}

export default Deserts

