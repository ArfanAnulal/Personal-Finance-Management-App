import { Paper,Button, Collapse, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDash from './UserDash'
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Login = () => {
  var navigate = useNavigate()

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const [alertf, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [alertState,setAlertState] = useState(false)


  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const[inputs,setInputs] = useState({Email:'',Password:''})  
  const inputHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  }


  const loginHandler=()=>{
     axios.post("http://localhost:1880/login",inputs)
        .then((res)=>{
            console.log(res);
            setAlertContent(res.data.message);
            setAlert(true);
            setAlertState(true);
            if (res.data.message == "success" ){
              alert(res.data.message)
                  if   (res.data.email=='Admin') {
                      navigate('/admin_dash')
                    } 

                  else{
                    var email = res.data.email
                    console.log("The email is "+email);
                    localStorage.setItem('email',email) //add local storage for admin also
                    navigate('/userdash')
                      }
                }

            else{
              navigate('/login')
            }
            
        })
        .catch((err)=>{
          console.log(err)
        })
  }
    
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={8} md={6} lg={4} xl={3} style={{ textAlign: 'center' }}>
      <Paper sx={{backgroundColor:'#dcdcdc', marginLeft:'5%',marginRight:'5%'}} elevation={15} >
        <Collapse in={alertState}>
          {alertf && (
            <Alert
              action={
                <IconButton onClick={() => setAlertState(false)} style={{ marginBottom: '-10%' }}>
                  <CloseIcon />
                </IconButton>
              }
              severity="error"
            >
              {alertContent}
            </Alert>
          )}
        </Collapse>
        <br /><br />
        <Typography variant="h3" style={{ fontFamily: 'times', paddingTop:'2%' }}>Login</Typography>
        <br /><br />
        <TextField
          variant="outlined"
          label="Email"
          onChange={inputHandler}
          name="Email"
          value={inputs.Email}
          fullWidth
          sx={{ m: 1, width: isSmallScreen ? '100%' : '30ch' }}
        />
        <br /><br />
        <FormControl fullWidth sx={{ m: 1, width: isSmallScreen ? '100%' : '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="Password"
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
        <Button
          variant="contained"
          onClick={loginHandler}
          style={{ backgroundColor: '#183e4b', fontFamily: 'times', borderRadius: '2rem',marginBottom:'5%'  }}
        >
          Log In
        </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login
