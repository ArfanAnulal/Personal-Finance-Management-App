import { Button, TextField, Typography } from '@mui/material'
import React from 'react'


const Login = () => {
    
  return (
    <div >
    <div style={{textAlign:'center', marginTop:'10%'}}>
      <Typography variant='h3' style={{fontFamily:'times'}}>Login</Typography>
      <br /><br />
      <TextField variant='outlined' label='Email'/>
      <br /><br />
      <TextField variant='outlined' label='Password'/>
      <br /><br />
      <Button variant='contained' style={{backgroundColor:'#183e4b',fontFamily:'times', borderRadius:'2rem'}}>Log In</Button>
    </div>
    </div>
  )
}

export default Login
