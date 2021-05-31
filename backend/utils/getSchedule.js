const pool = require('../pool');

exports.getSchedule = (req, res) => {
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
            let fetch = 'select * from exercise where workoutId = "' + req.headers.id + '";';
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
    });
}