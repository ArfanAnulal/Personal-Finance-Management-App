import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SignUp = () => {

  const[inputs,setInputs] = useState()
  const inputHandler=()=>{
    console.log('placeholder')
  }

  const signupHandler=()=>{
    console.log('placeholder')
  }


  return (
    <div >
    <div style={{textAlign:'center', marginTop:'10%'}}>
      <Typography variant='h3' style={{fontFamily:'times'}}>Sign Up</Typography>
      <br /><br />
      <TextField variant='outlined' label='Username' onChange={inputHandler}/>
      <br /><br />
      <TextField variant='outlined' label='Email' onChange={inputHandler}/>
      <br /><br />
      <TextField variant='outlined' label='Password' onChange={inputHandler}/>
      <br /><br />
      <Button variant='contained' onClick={signupHandler}  style={{backgroundColor:'#183e4b',fontFamily:'times', borderRadius:'2rem'}}>Sign Up</Button>
    </div>
    </div>
  )
}

export default SignUp
