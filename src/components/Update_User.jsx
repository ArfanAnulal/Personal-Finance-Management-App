import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update_User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        Username: location.state.val.Username,
        Email: location.state.val.Email,
      });
    }
  }, []);

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const isLargeScreen = useMediaQuery('(min-width:960px)');

  const [inputs, setInputs] = useState({ Username: '', Email: ''});

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const signupHandler = () => {
    axios.put("http://localhost:1880/edituser/"+location.state.val._id,inputs)
            .then((res)=>{
              console.log(res)
              alert(res.data.message)
              navigate('/admin_UM')
        })
        .catch((err)=>{
          console.log(err)
        })
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
          backgroundColor: '#dcdcdc',
          margin: '2rem 1rem',
          padding: '2rem',
          borderRadius: 12, 
          boxShadow: 50
        }} elevation={15}>
          <Typography variant={isSmallScreen ? 'h4' : 'h3'} style={{ fontFamily: 'times', visibility: 'visible',fontWeight:'bold' }}>Update User</Typography>
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
            Update
          </Button>
        </Paper>
      </div>
    </div>
  )
}

export default Update_User
