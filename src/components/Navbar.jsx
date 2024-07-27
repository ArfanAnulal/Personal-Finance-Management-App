import { AppBar, Box, Toolbar, IconButton, Button,Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import logo from'../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </Box>
  );
    

  return (
    <>
    <Box>
      <AppBar sx={{ paddingLeft: '24px', backgroundColor: '#183e4b' }} elevation={12}>
        <Toolbar sx={{ paddingLeft: '24px', paddingRight: '0' }}>
          <Link to='/'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, height: 80, width: 80 }}
              style={{ marginLeft: '2px' }}
            >
              <img src={logo} alt="Financio" style={{ height: '120px', width: '120px' }} />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list}
            </Drawer>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" size='large'>
              <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
                Login
              </Link>
            </Button>&nbsp;&nbsp;
            <Button color='inherit'>
              <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>
                Sign Up
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar
