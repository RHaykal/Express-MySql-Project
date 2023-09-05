const pool = require("../../config/db")

module.exports = {
    createU: (data, callBack) => {
        pool.query(
            `insert into user(fName, lName, gender, email, pass, tellno) values(?,?,?,?,?,?)`,
            [
                data.fName,
                data.lName,
                data.gender,
                data.email,
                data.pass,
                data.tellno
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getU: callBack => {
        pool.query(
            `select * from user`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getUID: (id, callBack) => {
        pool.query(
            `select * from user where id = ?`, [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    updateU: (id, data, callBack) => {
        pool.query(
            `update user set fName=?, lName=?, gender=?, email=?, pass=?, tellno=? where id = ?`, 
            [
                data.fName,
                data.lName,
                data.gender,
                data.email,
                data.pass,
                data.tellno,
                id
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    deleteU: (id, callBack) => {
        pool.query(
            `delete from user where id = ?`, [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
}