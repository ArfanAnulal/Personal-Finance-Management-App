import { Button, Grid, Box } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
const Admin_Dash = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('email', 'null');
    navigate('/');
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: { xs: '20%', sm: '15%', md: '10%', lg: '15%' },
        px: 2,
      }}
    >
      <Grid container direction="column" spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="contained"
            color="primary"
            style={{backgroundColor:'#183e4b'}}
            size="large"
            fullWidth
            sx={{ 
              minWidth: '200px', // Ensure buttons have the same minimum width
              padding: '10px 200px', 
              backgroundColor: '#1976d2' 
            }}
          >
            <Link to={'/admin_UM'} style={{ textDecoration: 'none', color: 'white' }}>
              Manage Users
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="contained"
            color="primary"
            style={{backgroundColor:'#183e4b'}}
            size="large"
            fullWidth
            sx={{ 
              minWidth: '200px', // Ensure buttons have the same minimum width
              padding: '10px 160px', 
              backgroundColor: '#1976d2' 
            }}
          >
            <Link to={'/admin_EM'} style={{ textDecoration: 'none', color: 'white' }}>
              Manage User Expenses
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="contained"
            color="warning"
            size="large"
            fullWidth
            onClick={logout}
            sx={{ 
              minWidth: '200px', // Ensure buttons have the same minimum width
              padding: '10px 217px', 
              // backgroundColor: '#1976d2' 
            }}
          >
            Log Out&nbsp;&nbsp;<LogoutIcon/>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin_Dash;
