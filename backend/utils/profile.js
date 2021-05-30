const pool = require('../pool');

exports.profile = (req, res) => {
    pool.getConnection((err) => {
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
                    console.log(result);
                    res.send({
                        status: 1,
                        success: true,
                        msg: "Fetched",
                        data: result,
                    });
                }
            });
        }
    })
}