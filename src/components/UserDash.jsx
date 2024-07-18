import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';


const UserDash = () => {
    var [user_details,setUserDetails] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
             console.log('Data obtained')
             setUserDetails(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    
  return (
      <div style={{ height: 607, width: '70%' ,marginTop:'5.3%',marginLeft:'15%'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell  style={{paddingLeft:'125px'}} width={15}>
                            <Button variant='contained' color='success' size='large'>
                                <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>Add</Link>   
                            </Button>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                {user_details.map((val,i)=>{
                    return(
                    <TableRow key={i}>
                        <TableCell>{val.id}</TableCell>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell >
                            <Button variant='contained' color='primary'>
                                Update
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button variant='contained' color='error'>
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

export default UserDash
