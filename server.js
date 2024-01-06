const express = require('express')

const app = express();

const PORT = 8080


app.use("/api", (req,res) => {
    console.log("server is ready")
    res.json("hello from server!")
})

app.listen(PORT, () => {
    console.log(` server is running on ${PORT}`)
})