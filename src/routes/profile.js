const express = require('express')
const profileRouter = express.Router()
const { userAuth } = require("../middlewares/auth");
const { validate } = require('../models/user');


profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
try{
  validateEditProfileData(req);
}catch(err){
  res.status(400).send("ERROR : " + err.message)
}
})
// 01:22:00
module.exports = profileRouter;