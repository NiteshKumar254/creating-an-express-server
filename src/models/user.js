const mongoose=require('mongoose');
//creating schema(definition of model)
const userSchema= new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
});
//creating model
//                          name of model,schemabeingused
// const User=mongoose.model("User",userSchema);
// module.exports=User;
//or
module.exports=mongoose.model("User",userSchema);
