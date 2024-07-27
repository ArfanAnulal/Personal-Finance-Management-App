import { Grid,Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';
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
    <Grid container justifyContent="center" alignItems="center" sx={{ mt: { xs: '15%', sm: '10%', md: '8%', lg: '5%'} }}>
      <Grid item xs={11} sm={8} md={6} lg={4} sx={{marginTop:'2%'}}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontFamily: 'times', mb: 3 }}>
            Add New Income/Expense
          </Typography>
          <Box sx={{ mb: 3 }}>
            <TextField
              style={{width:'32ch'}}
              variant="outlined"
              label="Amount"
              fullWidth
              onChange={inputHandler}
              name="Amount"
              value={inputs.Amount}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormControl style={{width:'32ch'}}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={inputs.Category}
                label="Category"
                name="Category"
                onChange={inputHandler}
              >
                <MenuItem value="Expense">Expense</MenuItem>
                <MenuItem value="Income">Income</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: 3 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
              <DatePicker
                label="Select Date"
                name="Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              style={{width:'32ch'}}
              variant="outlined"
              label="Description"
              fullWidth
              onChange={inputHandler}
              name="Description"
              value={inputs.Description}
            />
          </Box>
          <Button
            variant="contained"
            color="success"
            onClick={addHandler}
            sx={{ backgroundColor: '#183e4b', fontFamily: 'times', borderRadius: '2rem' }}
          >
            Confirm
          </Button>
        </Box>
      </Grid>
    </Grid>  
  )
}

export default Add
