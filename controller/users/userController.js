require("dotenv").config()
const { createU, getU, getUID, updateU, deleteU } = require("./userService")
const { genSaltSync, hashSync } = require("bcrypt") 

module.exports = {
    createUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(process.env.CRYPT_KEY)
        body.pass = hashSync(body.pass, salt)
        createU(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Opps, server error :("
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUser: (req, res) => {
        getU((err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Opps, server error :("
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUserID: (req, res) => {
        const id = req.params.id
        getUID(id, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Opps, server error :("
                })
            } else if (!results) {
                return res.json({
                    message: "no record found boss"
                })
            } else {
                return res.status(200).json({
                    success: 1,
                    data: results
                })
            }
        })
    },
    updateUser: (req,res) => {
        const id = req.params.id
        const body = req.body
        const salt = genSaltSync(10)
        body.pass = hashSync(body.pass, salt)
        updateU(id, body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Opps, server error :("
                })
            } else if (!results) {
                return res.json({
                    message: "failed to update"
                })
            } else {
                return res.status(200).json({
                    success: 1,
                    data: results
                })
            }
        })
    },
    deleteUser: (req, res) => {
        const id = req.params.id
        deleteU(id, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Opps, server error :("
                })
            } else if (!results) {
                return res.json({
                    message: "no record found"
                })
            } else {
                return res.status(200).json({
                    success: 1,
                    data: results
                })
            }
        })
    },
}