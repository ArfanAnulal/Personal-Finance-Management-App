import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import React from 'react';

const SignUpPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
        padding: 2,
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 500, backgroundColor: 'white', padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Create Your Account
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" variant="outlined" margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Confirm Password" type="password" variant="outlined" margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            Already have an account? <a href="/login" style={{ textDecoration: 'none', color: '#0072ff' }}>Log In</a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignUpPage;
