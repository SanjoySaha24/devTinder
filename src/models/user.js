const mongoose = require('mongoose');
const validator = require("validator");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: String,  
        minLength: 4,
        mixLength: 50,
    },
    lastName: {
        type: String   
    },
    emailId: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
            throw new Error("Invalid email address: " +value )
        }
    },
    },
    password:{
        type: String,   
        required: true,
            validate(value){
            if(!validator.isStrongPassword(value)){
            throw new Error("Enter a strong password " +value )
        }
    },
    },
    age:{
        type: Number, 
        min: 18,
    },
    gender:{
        type: String,   
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
    },
    photoUrl:{
        type: String,
        default:"https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png",
               validate(value){
            if(!validator.isURL(value)){
            throw new Error("Invalid photo URL: " +value )
        }
    },
    },
    about:{
        type: String,
        default: "This ia a default about of the user"
    },
    skills:{
        type: [String],
    },
},
{
    timestamps: true,
}
)
module.exports = mongoose.model("User", userSchema)
