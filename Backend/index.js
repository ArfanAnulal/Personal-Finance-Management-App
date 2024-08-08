// importing express
var express = require('express')
var cors = require('cors')
const jwt = require('jsonwebtoken')
require("./connection")
var userdata = require('./model/userdata')
var pfm = require('./model/pfm')
var email_obj
var email_string
// initialising
var app = express()


//middleware
app.use(express.json());
app.use(cors());

//api



// USER
// add userdata signup
app.post("/add_user",async(req,res)=>{
    try {
      await userdata(req.body).save();
      res.send({message:"Sign-up successful. Redirecting to login page..."});
    } catch (error) {
      console.log(error)
      if (error.name=='ValidationError')
        {res.send({message:"Please fill out all the fields"});}
      else{
      res.send({message:"This email already exists, try again with a different email"});
      }

    }
})


//login
app.post('/login', async (req, res) => {
	const user = await userdata.findOne({
		Email: req.body.Email,
    Password: req.body.Password
	})

	if (user) {
    // const token = jwt.sign({
    //        username: user.Username,
    //        email: user.Email,
    // },'secret123')
		return res.send({ status: 'ok', user: true, message:'Login successful', email:user.Email})
	}

	 else {
		return res.send({ status: 'error', user: false, message:'Login failed, try again!!!' })
	}
})




//display pfm
app.post("/get_userinfo",async(req,res)=>{
  try {
    email_obj = await req.body;
    console.log(email)
  } catch (error) {
    res.send(error);

  }
})
// 
app.get("/view_pfm",async(req,res)=>{
  try {
    email_string = email_obj.email
    console.log(email_string)
    var data = await pfm.find({Email:email_string})
    if (data.length === 0) {
      return res.status(404).send({ message: 'No data found' });
    }

    
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

//add pfm
app.post("/add_pfm",async(req,res)=>{
  try {
    await pfm(req.body).save();
    res.send({message:"Your finances have been uploaded successfully!!!"});
  } catch (error) {
    if (error.name=='ValidationError')
      {res.send({message:"Please fill out all the fields"});}
    else{
    res.send({message:"This email already exists, try again with a different email"});
    }

  }
})
//delete pfm
app.delete("/remove_pfm/:id",async(req,res)=>{
  try {
    var id = req.params.id
    await pfm.findByIdAndDelete(id)
    res.send({message:`Data of ${id} deleted successfully!!!`})
  } catch (error) {
    console.log(error)
  }
})

//update pfm
app.put("/editpfm/:id", async(req,res)=>{
  try {
    var id = req.params.id
    var output = await pfm.findByIdAndUpdate(id,req.body)
    res.send({message:`Data of ${id} Updated`, output})
  } catch (error) {
    console.log(error)
  }
})








//ADMIN
// admin view users
app.get("/admin_view",async(req,res)=>{
  try {
    var data = await userdata.find()
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

//admin view expenses
app.get("/admin_view_exp",async(req,res)=>{
  try {
    var data = await pfm.find({Category:'Expense'})
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})
// admin delete users
app.delete("/admin_remove/:id",async(req,res)=>{
  try {
    var id = req.params.id
    var data_of_user = await userdata.find({_id:`${id}`})
    console.log(data_of_user)
    var emailofuser = data_of_user[0].Email
    console.log(emailofuser)
    await userdata.findByIdAndDelete(id)
    await pfm.deleteMany({ Email: `${emailofuser}` });
    res.send({message:`Data of ${id} Deleted`})
  } catch (error) {
    console.log(error)
  }
})

//admin delete expenses
app.delete("/admin_remove_exp/:id",async(req,res)=>{
  try {
    var id = req.params.id
    await pfm.findByIdAndDelete(id)
    res.send({message:`Data of ${id} Deleted`})
  } catch (error) {
    console.log(error)
  }
})

//admin update users
app.put("/edituser/:id", async(req,res)=>{
  try {
    var id = req.params.id
    var output = await userdata.findByIdAndUpdate(id,req.body)
    res.send({message:`Data of ${id} Updated`, output})
  } catch (error) {
    console.log(error)
  }
})

//port
app.listen(1880,(req,res)=>{
    console.log("Port is up and running")
})