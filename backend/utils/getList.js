const pool = require('../pool');

exports.getList = (req, res) => {
    pool.getConnection((err, connection) => {
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
	     console.log(req.cookies.cookie);
            let fetch = 'select * from appointments where userId = "' + objectCookie.userId + '" order by appointmentDate desc;';
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
                    res.send({
                        status: 1,
                        success: true,
                        msg: 'Fetched',
                        data: result,
                    });
                }
            });
        }
        connection.release();
    });
}
