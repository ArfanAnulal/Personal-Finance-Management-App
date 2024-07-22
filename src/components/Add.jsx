import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
 
var email
const Add = () => {
  var navigate = useNavigate()


  let date = new Date()  //for update, first take date using useEffect, then add condition 
  const [value, setValue] = useState(dayjs(date));

  var [inputs, setInputs] = useState({Amount:'',Category:'',Date:null,Description:'',Email:''});
  const inputHandler=(e)=>{
     setInputs({...inputs,[e.target.name]:e.target.value})
     console.log(inputs)
   }
 


const addHandler=()=>{
  try {
    email = localStorage.getItem('email')
   console.log("Hiiii machane 2 "+email)
} catch (error) {
   console.log(error)
}
  inputs.Email= email
  inputs.Date= value
  console.log(inputs);
  axios.post("http://localhost:1880/add_pfm",inputs)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            navigate('/userdash')
        })
        .catch((err)=>{
          console.log(err)
        })

      }


//   try {
//     email = localStorage.getItem('email')
//    console.log("Hiiii machane 2 "+email)
// } catch (error) {
//    console.log(error)
// }


// const setDate=(value)=>{
//        var date = ''
//        date+=value.$D+'/'
//       date+=((value.$M)+1)+'/'
//       date+=value.$y
//       console.log(date)
//       inputs.Date=date
    
// }


// const[date1,setDate] = useState('')
// const [value,setValue] = useState(null);
// if (value!=null){
//     const date = []
//     date.push(value.$D)
//     date.push((value.$M)+1)
//     date.push(value.$y)
//     console.log(date)
    
// }



  return (
    <div>
      <div style={{textAlign:'center', marginTop:'10%'}}>
      <Typography variant='h3' style={{fontFamily:'times'}}>Add New Income/Expense</Typography>
      <br /><br />
      <TextField variant='outlined' label='Amount' style={{width:'17%'}} onChange={inputHandler} name='Amount' value={inputs.Amount}/>
      <br /><br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl style={{width:'17%'}}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputs.Category}
            label="Category"
            name='Category'
            onChange={inputHandler}
            >
            <MenuItem value={'Expense'}>Expense</MenuItem>
            <MenuItem value={'Income'}>Income</MenuItem>
            </Select>
        </FormControl>
        </Box>
      <br />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
         <DatePicker
          label='Select Date'
          name='Date'
          value={value}
          
          // slotProps={{ textField: { variant: 'outlined' } }}
          onChange={(newValue)=>setValue(newValue)}
         />
      </LocalizationProvider> 
      <br /><br />
      <TextField variant='outlined' label='Description' style={{width:'17%'}} onChange={inputHandler} name='Description' value={inputs.Description}/>
      <br /><br />
      <Button variant='contained' color='success' style={{backgroundColor:'#183e4b',fontFamily:'times', borderRadius:'2rem'}} onClick={addHandler}>Confirm</Button>
    </div>
    </div>
  )
}

export default Add
