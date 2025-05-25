const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        min: 18,
    },
    gender:{
        type: String
    },
    photoUrl:{
        type: String,
        default: "https://weimaracademy.org/wp-content/uploads/2021/08/dummy-user.png",
    },
    about:{
        type: String,
        default: "This is default about of user",

    },
    skills:{
        type: [String],
    },
})

module.exports = mongoose.model("User", userSchema);

