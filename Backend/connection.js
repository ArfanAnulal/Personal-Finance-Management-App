var mongoose = require('mongoose')


mongoose.connect('<Enter your mongodb connection string>')
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log(err)
})