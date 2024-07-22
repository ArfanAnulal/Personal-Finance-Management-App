import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  var navigate = useNavigate()

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
    <div >
    <div style={{textAlign:'center', marginTop:'8%'}}>
      <Typography variant='h3' style={{fontFamily:'times'}}>Sign Up</Typography>
      <br /><br />
      <TextField variant='outlined' label='Username' onChange={inputHandler} name='Username' value={inputs.Username} sx={{ m: 1, width: '30ch' }}/>
      <br /><br />
      <TextField variant='outlined' label='Email' onChange={inputHandler} name='Email' value={inputs.Email} sx={{ m: 1, width: '30ch' }}/>
      <br /><br />
      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
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
      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
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
      <Button variant='contained' onClick={signupHandler}  style={{backgroundColor:'#183e4b',fontFamily:'times', borderRadius:'2rem'}}>Sign Up</Button>
    </div>
    </div>
  )
}

export default SignUp
