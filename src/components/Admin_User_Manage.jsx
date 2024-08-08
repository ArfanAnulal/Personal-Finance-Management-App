import { Box, Grid,Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';


const Admin_User_Manage = () => {
  var [UserData,setUserData] = useState([]);

  const navigate = useNavigate();
  
  //to view
  useEffect (()=>{
    axios.get("http://localhost:1880/admin_view")
    .then((res)=>{
       console.log(res)
       setUserData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    },[])
  
    //to delete
    const delValue=(id)=>{
      console.log(id)
      axios.delete("http://localhost:1880/admin_remove/"+id)
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
      navigate("/updateuser",{state:{val}});
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
            <Button variant='contained' color='primary' onClick={() => navigate('/admin_dash')} style={{backgroundColor:'#183e4b'}}>
              Back
            </Button>
          </Box>     
      <TableContainer sx={{ maxHeight: 607,minWidth:900 }}>
        <Table >
            <TableHead style={{backgroundColor:'#183e4b'}}>
                <TableRow>
                    <TableCell style={{color:'white'}}>ID</TableCell>
                    <TableCell style={{color:'white'}}>Username</TableCell>
                    <TableCell style={{color:'white'}}>Email</TableCell>
                    {/* <TableCell></TableCell> */}
                    <TableCell colSpan={1}>
                            <Button variant='contained' color='success' title='New User'>
                                <Link to={'/signup'} style={{textDecoration:'none', color:'white'}}><PersonAddIcon/></Link>   
                            </Button>
                            </TableCell>
                    <TableCell></TableCell>
                    
                </TableRow>
            </TableHead>

            <TableBody>
            {UserData.map((val,i)=>{
              if (val.Username!='Admin'){
                return(
                    <TableRow key={i}>
                        <TableCell>{val._id}</TableCell>
                        <TableCell>{val.Username}</TableCell>
                        <TableCell>{val.Email}</TableCell>
                        <TableCell >
                            <Button variant='contained' title='Update' color='primary' onClick={()=>{updateValue(val)}} style={{backgroundColor:'#FFCC00'}}>
                                <UpdateIcon/>
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button variant='contained' title='Delete' color='error' onClick={()=>{delValue(val._id)}}>
                                <DeleteForeverIcon/>
                            </Button>
                        </TableCell>
                    </TableRow>
              
                )}})}   
            </TableBody>


        </Table>
      </TableContainer>
      </Grid>
      </Grid>
    </Box>
  )
}

export default Admin_User_Manage
