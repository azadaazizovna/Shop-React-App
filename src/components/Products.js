import React from 'react'
import { Grid } from '@material-ui/core';
import Product from './Product'
import makeStyles from './ProductStyle'



const Products = ({ products, onAddToCart }) => {

    const classes = makeStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
           {products.map((products) => ( 
              <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                 <Product products={products} onAddToCart={onAddToCart} />
              </Grid>
         ))}
        </Grid>
        </main>
    )
}

export default Products
