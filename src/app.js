const express = require('express')
const app = express()

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

app.use("/", (err, req,res,next) => {
    if(err){
        // log your error
        res.status(500).send("something went wrong")
    }
});

app.get("/getUserData", (req,res) => {
    try{
        // Logic of DB call and get user data
        throw new Error("dvfkfk");
        res.send("User data sent")
    }
    catch(err){
        res.status(500).send("Error")
    }
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port:7777");
})
