const mongoose=require('mongoose');
//creating schema(definition of model)

const validator = require("validator");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address:"+value);

            }
        },
    },
    password:{
        type:String,
        required:true,
         validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("enter strong pass:"+value);

            }
        },
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("gender is not valid")
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://bkvivyi.png",
         validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid PHOTO URL:"+value);

            }
        },
    },

    about:{
        type:String,
        default:"Default val about of the use",
    },
    skills:{
        type:[String],
    },
},
    {
        timestamps:true,
});
//creating model
//                          name of model,schemabeingused
// const User=mongoose.model("User",userSchema);
// module.exports=User;
//or
module.exports=mongoose.model("User",userSchema);
