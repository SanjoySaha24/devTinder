const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")

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
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
  }
));
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)
app.use("/", userRouter)

// Get user by email
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const user = await User.findOne({ emailId: userEmail });
//     if (!user) {
//       res.status(404).send("User not found");
//     } else {
//       res.send(user);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// // Feed API - GET/feed - get all users from database
// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// // Delete a user from databse
// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;
//   console.log(userId);
//   try {
//     const user = await User.findByIdAndDelete(userId);
//     res.send("User deleted successfully!");
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// // Update data of the user
// app.patch("/user/:userId", async (req, res) => {
//   const userId = req.params?.userId;
//   const data = req.body;

//   try {
//     const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

//     const isUpdateAllowed = Object.keys(data).every((k) =>
//       ALLOWED_UPDATES.includes(k)
//     );
//     if (!isUpdateAllowed) {
//       throw new Error("Update not allowed");
//     }
//     if (data?.skills.length > 10) {
//       throw new Error("Skills can't be more than 10");
//     }
//     const user = await User.findByIdAndUpdate(userId, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });
//     res.send("User updated succesfully");
//   } catch (err) {
//     res.status(400).send("UPDATE failed:" + err.message);
//   }
// });

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port:7777");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
