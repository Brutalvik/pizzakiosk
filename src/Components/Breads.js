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
    rembutton: {
        backgroundColor: "tomato",
        fontWeight: 'bolder',
        fontSize: 15,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    desc: {
        fontWeight: 'normal',
        fontSize: 12,
    },
});

const Breads = observer(({cards}) => {

    const classes = useStyles();
    const bread = store.breads.map((bread, bread_index) => (
        <Card key={bread.id} className={classes.root}>
            <CardActionArea className={classes.content}>
                <CardMedia
                    className={classes.media}
                    image={bread.img}
                    title="bread"
                />
                <CardContent>
                    <Typography className={classes.cardhead}>
                        {bread.name}
                    </Typography>
                    <Typography className={classes.desc}>
                        {bread.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{display: 'grid', gridTemplateColumns: '60px 60px 60px 60px', gap: '10px'}}>
                <Typography className={classes.price}>
                    ${bread.price}
                </Typography>
               
                    <Button onClick={() => store.rem_product(store.breads, bread_index)} size="large" className={classes.rembutton}>
                    -  
                    </Button>
                    <div className={classes.price}>
                    {store.breads[bread_index].quantity}
                    </div>   
                    <Button onClick={() => store.add_product(store.breads, bread_index)} size="large" className={classes.button}>
                    +
                    </Button>
            </CardActions>
        </Card>
    ))

    return (
        <div className="menu">{bread}<br /></div>
    )
})

export default Breads
