const adminAuth = (req,res,next) => {
    console.log("Admin auth is getting checked");
    const token = "xyz";
    const isAdminAuth = token === "xyz";
    if(!isAdminAuth){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    }
}
const userAuth = (req,res,next) => {
    console.log("User auth is getting checked");
    const token = "xyzabce";
    const isAdminAuth = token === "xyzabce";
    if(!isAdminAuth){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    }
}
module.exports = {
    adminAuth, userAuth
}