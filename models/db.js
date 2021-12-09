const mongoose = require('mongoose');

const url  = "mongodb+srv://dhls9701:Dnhls.9701@shoeshopp.vfzwu.mongodb.net/shoeshopp?authSource=admin&replicaSet=atlas-fa6c5n-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";


mongoose.connect(url,{useNewUrlParser:true},(err)=>{

    if(!err){
        console.log("Success");
    }else{console.log("Fail");}


})

require('./task.model');
require('./task.admin');
//require('./task.user');