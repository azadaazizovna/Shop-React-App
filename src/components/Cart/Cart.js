import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import makeStyles from './CartStyles'
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleRemoveFromCart,  handleUpdateCartQty }) => {

    const classes = makeStyles();

    
    

    if (!cart.line_items) return 'Loading...'

    const FilledCart = () => ( 
        <>
        <Grid container spacing={3}>
             {cart.line_items.map((item) => (
                 <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty}  />
                 </Grid>
             ))}
        </Grid>
        <div className={classes.cardDetails}>
           <Typography variant='h4'>
             Subtotal: {cart.subtotal.formatted_with_symbol}
           </Typography>
        </div>
        </>
    )


    return (
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
                { FilledCart() }
            </Container>
    );
};

export default Cart
