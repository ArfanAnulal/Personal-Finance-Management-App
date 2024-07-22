import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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

                {user_pfm.map((val,i)=>{
                    return(
                    <TableRow key={i}>
                        <TableCell>{val.Amount}</TableCell>
                        <TableCell>{val.Category}</TableCell>
                        <TableCell>{isoStringToDate(val.Date)}</TableCell>
                        <TableCell>{val.Description}</TableCell>
                        <TableCell>
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

export default UserDash
