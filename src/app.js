// Express.js Basics

// Middleware (e.g., app.use)
// Routing (app.get, app.post)
// Response methods (res.send, res.json, etc.)
// Server setup with app.listen

// This line imports the Express module,
// a lightweight web application framework for Node.js,
// which simplifies routing and server handling.

require("dotenv").config();
const express = require("express");

// This line initializes an Express application and assigns it to the variable app. This app object is used to define routes, middleware, and start the server.

const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

// SEASON 2 EP 3

// app.use() is middleware that handles all incoming requests, regardless of the route or HTTP method (GET, POST, etc.).
// (req, res) is a callback function with req (request) and res (response) objects.
// res.send("Hello from the server") sends back the string "Hello from the server" as a response to any request.
// This acts like a "catch-all" handler — any request to the server will return this message.

// app.use("/",(req, res) => {
//     res.send("Hello Sanjoy")
// })

// app.use("/test", (req, res) => {
//     res.send("Hello test from the server");
// })

// app.use("/",(req, res) => {
//     res.send("Hello Sanjoy")
// })

// app.use("/hello", (req, res) => {
//     res.send("Hello from the server")
// })

// SEASON 2 EP 4
// use POSTMAN

// app.use("/user", ()=> {
// 1st route Handler routes
// }, () =>{
// 2nd route handler
// })

// app.get("/user",(req, res) => {
//     res.send({firstName:"Sanjoy", lastname: "Saha"});
// })

// app.post("/user",(req, res) => {
//     res.send("Data successfully saved to DB");
// })

// app.delete("/user",(req, res) => {
//     res.send("Delete successfully");
// })

// app.use("/user",(req, res) => {
//     res.send("Hello from server");
// })

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000...");
// });

// app.get("/user/:userId/:name/:password",(req, res) => {
//     console.log(req.params);
//     res.send({firstName:"Sanjoy", lastname: "Saha"});
// })

// app.listen(3000, () => {
//         console.log("Server is listening on port 3000...");
// });

// SEASON 2 EP 5

// app.use("/user", (req, res, next) => {
//         console.log("Handling route user 1");
//         // res.end("Response 1!!");
//         next();
// },
//      (req, res) => {
//         console.log("Handling route user 2");
//         res.end("Response 2!!")
// }
// )

// app.get("/user1", (req, res) => {
//         res.end("Get Route handler 1")
// })

// handle auth middleware for all GET, POST, ... requests

app.use(express.json());

app.post("/signup", async (req, res) => {
  // creating a new instance of user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added Successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// Get user by email
app.get("/user", async(req,res) => {
      const userEmail = req.body.emailId;
      try{
        const users = await User.find({emailId: userEmail})
        if(users.length === 0){
                res.status(404).send("User not found");
        }
        else{
        res.send(users)
      }  }
      catch (err){
        res.status(400).send("Something went wrong")
      }
})

// Feed API - GET /feed - get all users from database
app.get("/feed", async(req,res) => {
 try{
        const users = await User.find({})
        
        res.send(users)
      }  
      catch (err){
        res.status(400).send("Something went wrong")
      }
})

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!");
  });
