const pool = require('../pool');

exports.getList = (req, res) => {
    pool.getConnection((err) => {
        if (err) {
            console.log("CONNECTION ERROR: " + err);
            res.send({
                status: 0,
                success: false,
                msg: err.message,
                data: null,
            });
        } else {
            let objectCookie = JSON.parse(req.cookies.cookie);
            let fetch = 'select * from appointments where userId = "' + objectCookie.userId + '";';
            pool.query(fetch, (err, result) => {
                if (err) {
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
                        msg: 'Fetched',
                        data: result,
                    });
                }
            });
        }
    });
}