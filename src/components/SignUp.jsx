import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const isLargeScreen = useMediaQuery('(min-width:960px)');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [inputs, setInputs] = useState({ Username: '', Email: '', Password: '', CPassword: '' });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const signupHandler = () => {
    if (inputs.Password === inputs.CPassword) {
      const finalinputs = { Username: inputs.Username, Email: inputs.Email, Password: inputs.Password };
      console.log(finalinputs);
      axios.post("http://localhost:1880/add_user", finalinputs)
        .then((res) => {
          console.log(res);
          if (res.data.message === 'This email already exists, try again with a different email' || res.data.message === 'Please fill out all the fields' ) {
            alert(res.data.message);
            navigate('/signup');
          } else {
            alert(res.data.message);
            navigate('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Passwords do not match, try again');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '1rem',
    }}>
      <div style={{
        textAlign: 'center',
        width: isSmallScreen ? '100%' : isMediumScreen ? '75%' : '50%',
        maxWidth: '500px',
      }}>
        <Paper sx={{
          backgroundColor: 'white',
          margin: '2rem 1rem',
          padding: '2rem',
          borderRadius: 12, 
          boxShadow: 50
        }} elevation={15}>
          <Typography variant={isSmallScreen ? 'h4' : 'h3'} style={{ fontFamily: 'times', visibility: 'visible' ,fontWeight:'bold'}}>Sign Up</Typography>
          <br />
          <TextField
            variant='outlined'
            label='Username'
            onChange={inputHandler}
            name='Username'
            value={inputs.Username}
            sx={{ m: 1, width: '100%' }}
          />
          <br />
          <TextField
            variant='outlined'
            label='Email'
            onChange={inputHandler}
            name='Email'
            value={inputs.Email}
            sx={{ m: 1, width: '100%' }}
          />
          <br />
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name='Password'
              onChange={inputHandler}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirmpassword">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirmpassword"
              type={showPassword ? 'text' : 'password'}
              name='CPassword'
              onChange={inputHandler}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
          <br />
          <Button
            variant='contained'
            onClick={signupHandler}
            style={{
              backgroundColor: '#183e4b',
              fontFamily: 'times',
              borderRadius: '2rem',
              marginBottom: '5%',
              width: '50%',
              padding: isSmallScreen ? '0.5rem' : '0.75rem',
              fontSize: isSmallScreen ? '0.875rem' : '1rem'
            }}
          >
            Sign Up
          </Button>
          <Grid item xs={12}>
          <Typography variant="body2" align="center">
            Already have an account? <a href="/login" style={{ textDecoration: 'none', color: '#0072ff' }}>Log In</a>
          </Typography>
        </Grid>
        </Paper>
    
      </div>
    </div>
  );
};

export default SignUp;
