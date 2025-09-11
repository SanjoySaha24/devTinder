const express = require('express')
const app = express()

// this will only handle GET call to /user 
app.get("/user", (req,res) => {
    res.send({firstName: "Sanjoy", lastName: "Saha"})
});

app.get("/user/:userId/:name/:password", (req,res) => {
    console.log(req.params);
    res.send({firstName: "Sanjoy", lastName: "Saha"})
});

app.post("/user", (req,res)=>{
    res.send("Data successfully saved to database");
})

app.delete("/user", (req,res) =>{
    res.send("Deleted successfully")
})

app.patch("/user", (req,res) =>{
    res.send("Patched successfully")
})

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello from the test")
});

app.use("/hey", (req, res) => {
    res.send("Hey from the test")
})

// Catch-all must go last
app.use((req, res) => {
    res.send("Hello from the server")
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port:7777");
})
