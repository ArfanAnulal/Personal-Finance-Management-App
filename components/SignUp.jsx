import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  var navigate = useNavigate()

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const isLargeScreen = useMediaQuery('(min-width:960px)');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const[inputs,setInputs] = useState({Username:'',Email:'',Password:'',CPassword:""})
  
  const inputHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  }
  

  const signupHandler=()=>{
    if (inputs.Password==inputs.CPassword){
      const finalinputs = {Username:inputs.Username,Email:inputs.Email,Password:inputs.Password}
      console.log(finalinputs)
    axios.post("http://localhost:1880/add_user",finalinputs)
        .then((res)=>{
            console.log(res)
            if (res.data.message=='This email already exists'){
            alert(res.data.message)
            navigate('/signup')
            }
            else{
              alert(res.data.message)
              navigate('/')
            }
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      else{
        alert('Passwords do not match, try again')
      }
  }


  return (
    
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      padding: '0 1rem',
      overflow: isMediumScreen || isLargeScreen ? 'hidden' : 'auto'
    }}>
      <div style={{ 
        textAlign: 'center', 
        width: isSmallScreen ? '100%' : '50%', 
        
      }}>
        <Paper sx={{backgroundColor:'#dcdcdc', marginLeft:'25%',marginRight:'25%',marginTop:'4%'}} elevation={15} >
        <Typography variant='h3' style={{ fontFamily: 'times', visibility: 'visible', paddingTop:'2%' }}>Sign Up</Typography>
        <br /><br />
        <TextField
          variant='outlined'
          label='Username'
          onChange={inputHandler}
          name='Username'
          value={inputs.Username}
          sx={{ m: 1, width: isSmallScreen ? '100%' : '30ch' }}
        />
        <br /><br />
        <TextField
          variant='outlined'
          label='Email'
          onChange={inputHandler}
          name='Email'
          value={inputs.Email}
          sx={{ m: 1, width: isSmallScreen ? '100%' : '30ch' }}
        />
        <br /><br />
        <FormControl sx={{ m: 1, width: isSmallScreen ? '100%' : '30ch' }} variant="outlined">
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
        <br /><br />
        <FormControl sx={{ m: 1, width: isSmallScreen ? '100%' : '30ch' }} variant="outlined">
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
        <br /><br />
        <Button
          variant='contained'
          onClick={signupHandler}
          style={{ backgroundColor: '#183e4b', fontFamily: 'times', borderRadius: '2rem',marginBottom:'5%' }}
        >
          Sign Up
        </Button>
        </Paper>
      </div>
    </div>
    
  )
}

export default SignUp
