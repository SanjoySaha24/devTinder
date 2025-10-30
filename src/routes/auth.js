const express = require('express')
const authRouter = express.Router()
const { validateSignUpData } = require("../utills/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// 47:02

// Create a user
authRouter.post("/signup", async (req, res) => {
  try {
    // validation of data
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;

    // encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    // create a new instance of user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// login
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await user.validatePassword(password)
    if (isPasswordValid) {
      // create a JWT token
      const token = await user.getJWT()

      // add the token to cookie and send response back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000)});
      res.send("Login Successful!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
});

authRouter.post("/logout", async(req,res))

module.exports = authRouter;