var mongoose = require('mongoose');
var schema = mongoose.Schema({
    Username:{type:String, required:true},
    Email:{type:String, unique:true, required:true},
    Password:{type:String, required:true}
})

var UserData = mongoose.model("userdata", schema);
module.exports = UserData;