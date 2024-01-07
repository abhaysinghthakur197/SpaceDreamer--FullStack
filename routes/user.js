const { Router } = require('express')
const router = Router();

// Adding uuid for user i.e user unique id
const {v4: uuidv4} = require('uuid')

const User = require('../models/user');

const {setUser} = require('../service/auth')

router.post("/signup", async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;
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
    res.json("signup done")

})

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password })
        console.log("user", user)

        if (user) {
            const sessionId = uuidv4();
            console.log(sessionId)
            // set user uuid
            setUser(sessionId,user)

            res.cookie("uid",sessionId)
             // User found, handle authentication logic here
            res.json({ message: "Signin successful", user });
        } else {
            // User not found
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }

})



module.exports = router;