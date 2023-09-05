const { authLogin } = require("./authController")
const router = require("express").Router()
const { checkToken } = require("./tokenVerify") 

router.post('/login', authLogin)

module.exports = router