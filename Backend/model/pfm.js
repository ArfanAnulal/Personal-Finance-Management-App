var mongoose = require('mongoose');
var schema = mongoose.Schema({
    Amount:{type:Number,required:true},
    Category:{type:String,required:true},
    Date:{type:String,required:true},
    Description:{type:String,required:true},
    Email:{type:String,required:true}
})

var PFM = mongoose.model("pfm", schema);
module.exports = PFM;