const pool = require('../pool');

exports.profile = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) {
            console.log("CONNECTION ERROR: " + err);
            res.send({
                status: 0,
                success: false,
                msg: err.message,
                data: null,
            });
        } else {
            let id = JSON.parse(req.cookies.cookie).userId;
            let fetch = 'select * from user where userId = "' + id + '";';
            // console.log(fetch);
            pool.query(fetch, (err, result) => {
                if(err) {
                    console.log("QUERY ERROR: " + err);
                    res.send({
                        status: 0,
                        success: false,
                        msg: err.message,
                        data: null,
                    });
                } else {
                    res.send({
                        status: 1,
                        success: true,
                        msg: "Fetched",
                        data: result,
                    });
                }
            });
        }
        connection.release();
    })
}