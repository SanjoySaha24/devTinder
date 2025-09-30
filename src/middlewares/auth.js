// const adminAuth = (req,res,next) => {
//     console.log("Admin auth is getting checked");
//     const token = "xyz";
//     const isAdminAuth = token === "xyz";
//     if(!isAdminAuth){
//         res.status(401).send("Unauthorized request");
//     }else{
//         next();
//     }
// }
const jwt = require('jsonwebtoken')
const User = require("../models/user")
const userAuth = async(req,res,next) => {
   // Read token from req cookies
   try{
    const {token} = req.cookies;
    if(!token){
        throw new Error("Token is not valid !!!")
    }
    const decodedObj = await jwt.verify(token, "DEV@Tinder$790")

    const{_id} = decodedObj;
    const user = await User.findById(_id)
    if(!user){
        throw new Error("User not found")
    }
    req.user = user;
    next()
}
    catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
}
module.exports = {
     userAuth
}