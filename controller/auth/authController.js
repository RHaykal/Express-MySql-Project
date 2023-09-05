require("dotenv").config()
const { authLogin } = require("./authService")
const { compareSync } = require("bcrypt") 
const { sign } = require("jsonwebtoken") 

module.exports = {
    authLogin: (req, res) => {
        const body = req.body
        authLogin(body.email, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Opps, server error :("
                })
            } else if(!results) {
                return res.json({
                    message: "Your email or password is wrong 😢"
                })
            } else {
                const result = compareSync(body.pass, results.pass)
                if(result) {
                    results.pass = undefined
                    const jsontoken = sign({ result:results }, process.env.TOKEN_CRYPT, {
                        expiresIn: "1h"
                    })
                    return res.status(200).json({
                        success: 1,
                        message: "Login success cap'n",
                        JWT: jsontoken
                    })
                } else {
                    return res.json({
                        success: 0,
                        message: "Your email or password is wrong 😢"
                    })
                }
            }
        })
    }
}