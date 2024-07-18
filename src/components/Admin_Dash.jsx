import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Dash = () => {
  return (
    <div style={{textAlign:'center', marginTop:'10%'}}>
      <Button variant='contained' color='primary'>
       <Link to={'/admin_UM'} style={{textDecoration:'none',color:'white'}}>Manage Users</Link>
      </Button>
      <br /><br />
      <Button variant='contained' color='primary'>
       <Link to={'/admin_EM'} style={{textDecoration:'none',color:'white'}}>Manage User Expenses</Link>
      </Button>
    </div>
  )
}

export default Admin_Dash
