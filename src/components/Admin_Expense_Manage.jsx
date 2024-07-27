import { Box,Grid ,Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Admin_Expense_Manage = () => {
  var [UserExp,setUserExp] = useState([]);

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
  useEffect (()=>{ 
    axios.get("http://localhost:1880/admin_view_exp")
    .then((res)=>{
       console.log(res)
       setUserExp(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    },[])

  //to delete
    const delValue=(id)=>{
      console.log(id)
      axios.delete("http://localhost:1880/admin_remove_exp/"+id)
      .then((res)=>{
        alert(res.data.message)
        window.location.reload()
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  return (
    <Box
      sx={{
        mt: { sm: '11%', md: '6%' }
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
      <TableContainer sx={{ maxHeight: 607,minWidth:900 }}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell >Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="center" colSpan={2}>
                            <Button variant='contained' color='success' size='large'>
                                <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>Add</Link>   
                            </Button>
                    </TableCell>
                    <TableCell></TableCell>
                    
                   
                </TableRow>
            </TableHead>

            <TableBody>
            {UserExp.map((val,i)=>{
                return(
                    <TableRow key={i}>
                        <TableCell>{val.Email}</TableCell>
                        <TableCell>{val.Amount}</TableCell>
                        <TableCell>{isoStringToDate(val.Date)}</TableCell>
                        <TableCell>{val.Description}</TableCell>                       
                        <TableCell >
                            <Button variant='contained' color='primary'>
                                Update
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button variant='contained' color='error' onClick={()=>{delValue(val._id)}}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                
                )})}
            </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      </Grid>
      </Box>
  )
}

export default Admin_Expense_Manage
