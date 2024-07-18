import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import React, { useState } from 'react'

const Add = () => {
    const [category, setCategory] = useState('');
    const [value,setValue] = useState(null);
    if (value!=null){
        const date = []
        console.log(value.$D)
        console.log(value.$M)
        console.log(value.$y)
        date.push(value.$D)
        date.push((value.$M)+1)
        date.push(value.$y)
        console.log(date)
    }

    const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(category)
  }; 

  

  return (
    <div>
      <div style={{textAlign:'center', marginTop:'10%'}}>
      <Typography variant='h3' style={{fontFamily:'times'}}>Add New Income/Expense</Typography>
      <br /><br />
      <TextField variant='outlined' label='Amount' style={{width:'17%'}}/>
      <br /><br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl style={{width:'17%'}}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
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
          value={value}
          onChange={(newValue)=>setValue(newValue)}
          renderInput={(props)=><TextField{...props}/>}
         />
      </LocalizationProvider> 
      <br /><br />
      <TextField variant='outlined' label='Description' style={{width:'17%'}}/>
      <br /><br />
      <Button variant='contained' color='success' style={{backgroundColor:'#183e4b',fontFamily:'times', borderRadius:'2rem'}}>Confirm</Button>
    </div>
    </div>
  )
}

export default Add
