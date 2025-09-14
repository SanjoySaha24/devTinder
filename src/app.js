const express = require('express')
const connectDB= require("./config/database")
const app = express();
const User = require("./models/user")

// MIDDLEWARES
// const {adminAuth, userAuth} = require("./middlewares/auth")
// handle auth middleware for all GET, POST,...... requests
// app.use("/admin", adminAuth)
// app.use("/user", userAuth)

// ROUTES
// app.get("/user", (req, res) => {
//     res.send("User data sent");
// })
// app.get("/user/logIn", (req,res) => {
//         res.send("Logged in");
//     })
// app.get("/admin/getAllData", (req, res) => {
//     res.send("All data sent");
// })
// app.get("/admin/deleteUser", (req, res) => {
//     res.send("User deleted");
// })


// SEASON 2 Episode 3 & 4
// // this will only handle GET call to /user 
// app.get("/user", (req,res) => {
//     res.send({firstName: "Sanjoy", lastName: "Saha"})
// });

// app.get("/user/:userId/:name/:password", (req,res) => {
//     console.log(req.params);
//     res.send({firstName: "Sanjoy", lastName: "Saha"})
// });

// app.post("/user", (req,res)=>{
//     res.send("Data successfully saved to database");
// })

// app.delete("/user", (req,res) =>{
//     res.send("Deleted successfully")
// })

// app.patch("/user", (req,res) =>{
//     res.send("Patched successfully")
// })

// // this will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//     res.send("Hello from the test")
// });

// app.use("/hey", (req, res) => {
//     res.send("Hey from the test")
// })

// // Catch-all must go last
// app.use((req, res) => {
//     res.send("Hello from the server")
// })
app.use(express.json());
app.post("/signup", async (req,res) => {
    // create a new instance of user model
    const user = new User(req.body)
    console.log(req.body);
    
   try{
     await user.save();
    res.send("User added successfully");
} catch(err){
       res.status(400).send("Error saving the user: " +err.message);
   }
})

connectDB().then(()=> {
    console.log("Database connection established...");
    app.listen(7777, () => {
    console.log("Server is successfully listening on port:7777");
});
}).catch((err) => {
    console.log("Database cannot be connected");
})