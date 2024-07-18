import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from'../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

    

  return (
    <>
    <Box >
      <AppBar style={{paddingLeft:'24px', backgroundColor:'#183e4b'}} elevation={12}  >
        <Toolbar style={{paddingleft:'24px', paddingRight:'0'}}>
        <Link to='/'>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, height:80, width:80}}
                style={{marginLeft:'2px'}}
                
            >
                <img src={logo} alt="Financio" style={{height:'120px', width:'120px'}} />
            </IconButton>
          </Link>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <div style={{marginLeft:'1200px'}}>
          <Button color="inherit" size='large'>
            <Link to='/login' style={{textDecoration:'none', color:'white'}}>
               Login
            </Link>
          </Button>&nbsp;&nbsp;

          <Button color='inherit'>
            <Link to='/signup' style={{textDecoration:'none', color:'white'}}>
               Sign Up
            </Link>
          </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar
