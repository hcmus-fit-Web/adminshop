const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    username: {
        type : String,
        require : true
    },
    email: {
        type : String,
    },
    name:{
        type: String
    },
    password:{
        type: String,
        require: true
    },
    number:{
        type:String
    }
})

mongoose.model('admin',adminSchema,'admin');