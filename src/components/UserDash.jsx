import React, { useEffect, useState } from 'react'
import {Button,Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

var email
const UserDash = () => {



    function isoStringToDate(isoString) {
        // Split the ISO string into date and time parts
        const [datePart] = isoString.split('T');
        
        // Split the date part into year, month, and day
        const [year, month, day] = datePart.split('-');
        
        // Format the date as dd/mm/yyyy
        const formattedDate = `${day}/${month}/${year}`;
        
        return formattedDate;
    }

    try {
         email = localStorage.getItem('email')
        console.log("Hiiii machane  "+email)
        axios.post("http://localhost:1880/get_userinfo",{email})
            .then((res)=>{
                console.log(res)
                console.log('done')
            })
            .catch((err)=>{
              console.log(err)
            })
    } catch (error) {
        console.log(error)
    }

        
    
    var [user_pfm,setUserPFM] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:1880/view_pfm')
        .then((res)=>{
             console.log('Data obtained')
             setUserPFM(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    




    const delValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:1880/remove_pfm/"+id)
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
                  <TableCell>Amount</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="center" colSpan={2}>
                    <Button variant="contained" color="success" size="large">
                      <Link to="/add" style={{ textDecoration: 'none', color: 'white' }}>Add</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {user_pfm.map((val, i) => (
                  <TableRow key={i}>
                    <TableCell>{val.Amount}</TableCell>
                    <TableCell>{val.Category}</TableCell>
                    <TableCell>{isoStringToDate(val.Date)}</TableCell>
                    <TableCell>{val.Description}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Update
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={() => delValue(val._id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserDash
