const pool = require('../pool');
const fs = require('fs');

exports.addSchedule = (req, res) => {

    let workoutId = req.body.workoutId;
    let time = req.body.time;
    let userId = JSON.parse(req.cookies.cookie).userId;

    pool.getConnection((err, connection) => {
        if (err) {
            console.log("SQL CONNECTION ERROR: " + err.message);
            res.send({
                status: 0,
                msg: err.message,
                success: false,
                data: null,
            });
        } else {
            var today = new Date();
            let date = today.getDate();
            let month = today.getMonth();
            let year = today.getFullYear();
            let finalDate = date + '-' + month + '-' + year;
            let fetch = "insert into workout values('" + userId + "','" + workoutId + "','" + finalDate + "','" + time + "');";
            console.log(fetch);
            pool.query(fetch, (err, result) => {
                if (err) {
                    console.log("SQL QUERY RUN ERROR: " + err.message);
                    res.send({
                        status: 0,
                        msg: err.message,
                        success: false,
                        data: null,
                    });
                } else {
                    let temp = fetch + '\n';
                    fs.appendFile('Queries.txt', temp, err => {
                        if (err) console.log(err);
                    });
                    res.send({
                        status: 1,
                        msg: 'Added to schedule',
                        success: true,
                        data: [],
                    });
                }
            });
        }
        connection.release();
    })
}