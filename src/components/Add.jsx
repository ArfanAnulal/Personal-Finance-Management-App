import { Grid, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Paper } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const [value, setValue] = useState(dayjs());
  const [inputs, setInputs] = useState({ Amount: '', Category: '', Date: null, Description: '', Email: '' });

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        Amount: location.state.val.Amount,
        Category: location.state.val.Category,
        Date: location.state.val.Date,
        Description: location.state.val.Description,
        Email: location.state.val.Email,
      });
      setValue(dayjs(location.state.val.Date));
    }
  }, [location.state]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  }

  const addHandler = () => {
    if(location.state !== null){
      inputs.Date = value;
      axios.put("http://localhost:1880/editpfm/"+location.state.val._id,inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        if (localStorage.getItem('email')=='Admin'){
          navigate('/admin_EM')
        }
        else{
        navigate('/userdash')
        }
  })
  .catch((err)=>{
    console.log(err)
  })
}
    else{
      try {
        const email = localStorage.getItem('email');
        console.log("Hiiii machane 2 " + email);
        inputs.Email = email;
        inputs.Date = value;
        console.log(inputs);
        axios.post("http://localhost:1880/add_pfm", inputs)
          .then((res) => {
            console.log(res);
            alert(res.data.message);
            if(res.data.message=="Please fill out all the fields"){
              navigate('/add')}
            else{
            navigate('/userdash');}
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
  }
  }

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ mt: { xs: '15%', sm: '10%', md: '8%', lg: '5%' } }}>
      <Grid item xs={11} sm={8} md={6} lg={4} sx={{ marginTop: '2%' }}>
      <Paper sx={{ backgroundColor: 'white', padding: '2rem',paddingRight:'3rem' ,borderRadius: 12, 
          boxShadow: 50}} elevation={15}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontFamily: 'times', mb: 3,fontWeight:'bold'}}>
            Add New Income/Expense
          </Typography>
          <Box sx={{ mb: 3 }}>
            <TextField
              style={{ width: '32ch' }}
              variant="outlined"
              label="Amount"
              fullWidth
              onChange={inputHandler}
              name="Amount"
              value={inputs.Amount}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormControl style={{ width: '32ch' }}>
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
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              style={{ width: '32ch' }}
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
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Add;
