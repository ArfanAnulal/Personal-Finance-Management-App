import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Admin_Expense_Manage = () => {
  return (
    <div style={{ height: 607, width: '90%' ,marginTop:'5.3%',marginLeft:'8%'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
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

export default Admin_Expense_Manage
