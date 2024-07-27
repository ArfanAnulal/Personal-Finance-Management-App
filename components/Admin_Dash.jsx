import { Button,Grid,Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Dash = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: { xs: '20%', sm: '15%', md: '10%', lg: '5%' },
        px: 2,
      }}
    >
      <Grid container spacing={4} justifyContent="center" sx={{marginTop:'15%'}}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ padding: '10px 20px', backgroundColor: '#1976d2' }}
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
            size="large"
            fullWidth
            sx={{ padding: '10px 20px', backgroundColor: '#1976d2' }}
          >
            <Link to={'/admin_EM'} style={{ textDecoration: 'none', color: 'white' }}>
              Manage User Expenses
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Admin_Dash
