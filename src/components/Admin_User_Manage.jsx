import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Admin_User_Manage = () => {
  var [UserData,setUserData] = useState([]);
  
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

  return (
    <div style={{ height: 607, width: '70%' ,marginTop:'5.3%',marginLeft:'15%'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    {/* <TableCell></TableCell> */}
                    <TableCell style={{paddingLeft:'7.8%'}} width={15}>
                            <Button variant='contained' color='success' size='large'>
                                <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>Add</Link>   
                            </Button>
                            </TableCell>
                    <TableCell></TableCell>
                    
                </TableRow>
            </TableHead>

            <TableBody>
            {UserData.map((val,i)=>{
                return(
                    <TableRow key={i}>
                        <TableCell>{val._id}</TableCell>
                        <TableCell>{val.Username}</TableCell>
                        <TableCell>{val.Email}</TableCell>
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
    </div>
  )
}

export default Admin_User_Manage
