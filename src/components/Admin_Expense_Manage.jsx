import { Box, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Admin_Expense_Manage = () => {
  const navigate = useNavigate();

  var [UserExp, setUserExp] = useState([]);

  function isoStringToDate(isoString) {
    // Split the ISO string into date and time parts
    const [datePart] = isoString.split('T');
    
    // Split the date part into year, month, and day
    const [year, month, day] = datePart.split('-');
    
    // Format the date as dd/mm/yyyy
    const formattedDate = `${day}/${month}/${year}`;
    
    return formattedDate;
  }

  //to view
  useEffect(() => { 
    axios.get("http://localhost:1880/admin_view_exp")
      .then((res) => {
        console.log(res)
        setUserExp(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //to delete
  const delValue = (id) => {
    console.log(id)
    axios.delete("http://localhost:1880/admin_remove_exp/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateValue = (val) => {
    console.log('up clicked')
    console.log(val)
    navigate("/add", { state: { val } });
  }

  return (
    <Box sx={{ mt: { sm: '11%', md: '6%' } }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Box sx={{ mb: 2 }}>
            <Button variant='contained' color='primary' onClick={() => navigate('/admin_dash')} style={{backgroundColor:'#183e4b'}}>
              Back
            </Button>
          </Box>
          <TableContainer sx={{ maxHeight: 607, minWidth: 900 }} >
            <Table  >
              <TableHead style={{backgroundColor:'#183e4b'}}>
                <TableRow >
                  <TableCell style={{color:'white'}}>Email</TableCell>
                  <TableCell  style={{color:'white'}}>Amount</TableCell>
                  <TableCell  style={{color:'white'}}>Date</TableCell>
                  <TableCell  style={{color:'white'}}>Description</TableCell>
                  <TableCell align="" colSpan={2}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='success' title='New Expense'>
                      <Link to={'/add'} style={{ textDecoration: 'none', color: 'white' }}><AddCircleIcon /></Link>   
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {UserExp.map((val, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell >{val.Email}</TableCell>
                      <TableCell>{val.Amount}</TableCell>
                      <TableCell>{isoStringToDate(val.Date)}</TableCell>
                      <TableCell>{val.Description}</TableCell>
                      <TableCell align="center">
                        <Button variant='contained' title='Update' color='primary' onClick={() => { updateValue(val) }} style={{backgroundColor:'#FFCC00'}}>
                          <UpdateIcon />
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <Button variant='contained' title='Delete' color='error' onClick={() => { delValue(val._id) }}>
                          <DeleteForeverIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Admin_Expense_Manage;
