const { createUser, getUser, getUserID, updateUser, deleteUser } = require("./userController")
const router = require("express").Router()
const { checkToken } = require("../auth/tokenVerify")

router.post("/", createUser)
router.get("/", getUser)
router.get("/:id", checkToken, getUserID)
router.patch("/:id", checkToken, updateUser)
router.delete("/:id", checkToken, deleteUser)



module.exports = router