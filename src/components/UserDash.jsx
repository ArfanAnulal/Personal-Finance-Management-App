import React, { useEffect, useState } from 'react'
import {Button,Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
var email
const UserDash = () => {
  var navigate = useNavigate()
  


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


      const updateValue=(val)=>{
        console.log('up clicked')
        console.log(val)
        navigate("/add",{state:{val}});
      }

      const logout=()=>{
        localStorage.setItem('email','null')
        navigate('/')
      }



  return (
    <Box
      sx={{
        mt: { sm: '11%', md: '6%' }
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box sx={{ mb: 2 }}>
            <Button variant='contained' color='warning' onClick={logout} title='Log Out'>
              Log Out&nbsp;&nbsp;<LogoutIcon/>
            </Button>
          </Box>   
          <TableContainer sx={{ maxHeight: 607,minWidth:900 }}>
            <Table >
              <TableHead style={{backgroundColor:'#183e4b'}}>
                <TableRow>
                  <TableCell style={{color:'white'}}>Amount</TableCell>
                  <TableCell style={{color:'white'}}>Category</TableCell>
                  <TableCell style={{color:'white'}}>Date</TableCell>
                  <TableCell style={{color:'white'}}>Description</TableCell>
                  <TableCell  colSpan={2}>
                    <Button variant="contained" color="success" title='New Expense'>
                      <Link to="/add" style={{ textDecoration: 'none', color: 'white' }}><AddCircleIcon/></Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {user_pfm.map((val, i) => (
                  <TableRow key={i}>
                    <TableCell >{val.Amount}</TableCell>
                    <TableCell>{val.Category}</TableCell>
                    <TableCell>{isoStringToDate(val.Date)}</TableCell>
                    <TableCell>{val.Description}</TableCell>
                    <TableCell>
                      <Button variant="contained" title='Update' color="primary" onClick={() => updateValue(val)} style={{backgroundColor:'#FFCC00'}}>
                        <UpdateIcon/>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" title='Delete' color="error" onClick={() => delValue(val._id)}>
                        <DeleteForeverIcon/>
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
