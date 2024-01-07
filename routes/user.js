const {Router} = require('express')
const router = Router();

const User = require('../models/user');

router.post("/signup", async (req,res) => {
    console.log(req.body)
   const {username, email, password} = req.body;
   console.log("ready for post")
   try {
    await User.create({
        username,
        email,
        password
       })
   } catch (error) {
    console.log(error)
    res.json(error)
   }
   res.json("post done")
   
})

module.exports = router;