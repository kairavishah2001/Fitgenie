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

                        // } else {
                        //     if (req.body.google) {
                        //         let updateImage = "UPDATE user SET imageUrl = '" + req.body.imageUrl + "' WHERE email='" + email + "';";
                        //         // console.log(updateImage); 
                        //         con.query(updateImage, function (err, results) {
                        //             if (err) {
                        //                 // console.log(err.message);
                        //                 res.send({
                        //                     status: 0,
                        //                     msg: err.message,
                        //                     data: null,
                        //                 });
                        //             }
                        //         })
                        //         res.cookie('cookie', email, { maxAge: 60 * 60 * 1000, httpOnly: false, path: '/' });
                        //         req.session.user = email;
                        //         // console.log(req.session.user);

                        //         res.send({
                        //             status: 1,
                        //             msg: 'Welcome, you have successfully logged in.',
                        //             success: true,
                        //             data: { email },
                        //         });
                        //     }
                        //     else {
                        //         bcrypt.compare(req.body.password, result.password, function (err, login) {
                        //             if (login) {
                        //                 res.cookie('cookie', email, { maxAge: 60 * 60 * 1000, httpOnly: false, path: '/' });
                        //                 req.session.user = email;

                        //                 res.send({
                        //                     status: 1,
                        //                     msg: 'Welcome, you have successfully logged in.',
                        //                     success: true,
                        //                     data: { email },
                        //                 });
                        //             }
                        //         })
                        //     }
                    } else {
                        res.cookie('cookie', email, { maxAge: 60 * 60 * 1000, httpOnly: false, path: '/' });
                        req.session.user = email;

                        res.send({
                            status: 1,
                            msg: "Logged in",
                            success: true,
                            data: results,
                        });
                    }
                });
            }
        });
    }
}