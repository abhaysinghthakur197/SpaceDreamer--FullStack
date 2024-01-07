const express = require('express')

const connectToMongoDB = require('./connect')

const userRoute = require('./routes/user')

const app = express();
const PORT = 8080


//  connect mongodb
connectToMongoDB("mongodb://127.0.0.1:27017/SpaceDreamer-app").then(() => console.log("Db connected")).catch((e) => console.log(e));

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use("/api", (req,res) => {
//     console.log("server is ready")
//     res.json("hello from server!")
// })

app.use("/api/user",userRoute)




app.listen(PORT, () => {
    console.log(` server is running on ${PORT}`)
})