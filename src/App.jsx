import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserDash from './components/UserDash'
import Add from './components/Add'
import Admin_User_Manage from './components/Admin_User_Manage'
import Admin_Expense_Manage from './components/Admin_Expense_Manage'
import Admin_Dash from './components/Admin_Dash'
import Update_User from './components/Update_User'
// import Passworddots from './test/Passworddots'
//import Signuptest1 from './test/Signuptest1'
import Admin_login from './components/Admin_login'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/userdash' element={<UserDash/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/admin_dash' element={<Admin_Dash/>}/>
        <Route path='/admin_UM' element={<Admin_User_Manage/>}/>
        <Route path='/admin_EM' element={<Admin_Expense_Manage/>}/>
        <Route path='/updateuser' element={<Update_User/>}/>
        <Route path='/admin_login' element={<Admin_login/>}/>
      </Routes>
    </>
  )
}

export default App
