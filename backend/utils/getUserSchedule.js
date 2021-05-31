const pool = require('../pool');

exports.getUserSchedule = (req, res) => {
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
            let objectCookies = JSON.parse(req.cookies.cookie);
            let fetch = 'select w.*, e.image from workout w left join exercise e on e.workoutId = w.workoutId where userId = "' + objectCookies.userId + '";';
            // console.log(fetch);
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
                    // console.log(result);
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