import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Admin_Expense_Manage = () => {
  var [UserExp,setUserExp] = useState([]);
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
    <div style={{ height: 607, width: '90%' ,marginTop:'5.3%',marginLeft:'8%'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    
                   
                </TableRow>
            </TableHead>

            <TableBody>
            {UserExp.map((val,i)=>{
                return(
                    <TableRow key={i}>
                        <TableCell>{val.Email}</TableCell>
                        <TableCell>{val.Amount}</TableCell>
                        <TableCell>{val.Date}</TableCell>
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
    </div>
  )
}

export default Admin_Expense_Manage
