import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import makeStyles from './styles'


const CartItem = ({item, handleUpdateCartQty, handleRemoveFromCart }) => {
    const classes = makeStyles()

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
               <Typography variant='h4' > {item.name} </Typography>
               <Typography variant='h5' > {item.line_total.formatted_with_symbol} </Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                   <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1) }>-</Button>
                   <Typography>{item.quantity}</Typography>
                   <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1) }>+</Button>
                </div>
                <Button style={{backgroundColor: 'lightpink'}} variant='contained' type='button' onClick={() => handleRemoveFromCart(item.id) }>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
