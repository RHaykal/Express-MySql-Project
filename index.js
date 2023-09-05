require("dotenv").config()
const express = require("express")
const app = express()
const userRoute = require("./controller/users/userRoute")
const authRoute = require("./controller/auth/authRoute")
app.use(express.json())

app.use("/users", userRoute)
app.use("/auth", authRoute)

// app.get('/', (req,res) => {
//     res.json({
//         success: 1,
//         message: "Hello there!"
//     })
// })



app.listen(process.env.APP_PORT, () => {
    console.log("Server's all good on port", process.env.APP_PORT, "cap'n")
})