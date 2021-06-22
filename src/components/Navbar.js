import React from 'react'
import  { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../images/logo.jpg'
import makeStyles from './Navbarstyle'
import { Link, useLocation } from 'react-router-dom'


const Navbar = ({ totalItems }) => {
    const classes = makeStyles();
    const location = useLocation();

    return (
        <>
           <AppBar position='fixed'  className={classes.appBar} color='inherit'>
               <Toolbar>
                   <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                     <img src={logo} alt='Commerce.js' height='100px' classname={classes.image} />
                   </Typography>
                   <div classname={classes.grow} />
                   {location.pathname === '/' && ( 
                   <div className={classes.button}>
                       <IconButton component={Link} to='/cart' aria-label='Show cart item' color='inherit'>
                           <Badge badgeContent={totalItems} color='secondary'>
                               <ShoppingCart />
                           </Badge>
                       </IconButton>
                   </div> )} 
               </Toolbar>
           </AppBar>
        </>
    )
}

export default Navbar
