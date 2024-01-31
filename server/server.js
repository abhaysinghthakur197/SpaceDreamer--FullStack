const express = require('express')

const connectToMongoDB = require('./connect')

const userRoute = require('./routes/user')
const articleRoute = require('./routes/article')

// Adding cors for getting the req
const cors = require('cors')

// Adding cookie parser middleware
const cookieParser  = require('cookie-parser')

const app = express();
const PORT = 8080

app.use(cors());

//  connect mongodb
connectToMongoDB("mongodb://127.0.0.1:27017/SpaceDreamer-app").then(() => console.log("Db connected")).catch((e) => console.log(e));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use("/api", (req,res) => {
//     console.log("server is ready")
//     res.json("hello from server!")
// })

app.use("/api/user", userRoute)
app.use("/api/article",articleRoute)




app.listen(PORT, () => {
    console.log(` server is running on ${PORT}`)
})