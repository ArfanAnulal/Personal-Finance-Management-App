import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'

const Passworddots = () => {
    const[inputs,setInputs] = useState({Username:'',Email:'',Password:''})
  
  const inputHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  }
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  return (
    <div style={{textAlign:'center',marginTop:'20%'}}>
      
    </div>
  )
}

export default Passworddots
