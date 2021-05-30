const pool = require('../pool');

exports.login = (req, res) => {
    let email = req.headers.email;
    if (req.session.user) {
        res.send({
            status: 1,
            msg: 'User already logged in',
            success: true,
            data: {},
        });
    } else {
        pool.getConnection(function (err) {
            if (err) {
                res.send({
                    status: 0,
                    msg: 'Something is wrong with the server. Please try again later',
                    data: {},
                });
            } else {
                let sqlQuery = "SELECT * FROM user WHERE email='" + email + "'";
                pool.query(sqlQuery, function (err, results) {
                    if (err) {
                        res.send({
                            status: 0,
                            msg: err.message,
                            success: false,
                            data: {},
                        });
                    }
                    else if (results.length === 0) {
                        res.send({
                            status: 1,
                            msg: "User does not exist. Sign Up First!",
                            success: false,
                            data: {},
                        });
                     } else{
                        res.send({
                            status: 1,
                            msg: "Logged in successfully",
                            success: true,
                            data: results,
                        });
                     }
                });
            }
        });
    }
}