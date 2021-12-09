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
        type: String
    },
    number:{
        type:String
    }
})

const Admin = mongoose.models.admin || mongoose.model('admin',adminSchema);
module.exports = Admin