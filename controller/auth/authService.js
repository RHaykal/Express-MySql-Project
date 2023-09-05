const pool = require("../../config/db")

module.exports = {
        authLogin: (email, callBack) => {
        pool.query(
            `select * from user where email = ?`, [email],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    }
}