import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Admin_User_Manage = () => {
  return (
    <div style={{ height: 607, width: '70%' ,marginTop:'5.3%',marginLeft:'15%'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>

            <TableBody>

                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
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
                
                    
            </TableBody>


        </Table>
      </TableContainer>
    </div>
  )
}

export default Admin_User_Manage
