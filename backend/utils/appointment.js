const pool = require('../pool');
const fs = require('fs');

exports.appointment = (req, res) => {
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
            let fetch = 'insert into appointments values ("' + objectCookie.userId + '","' + req.body.name + '","' + req.body.date + '","' + req.body.time + '","' + req.body.role + '");';
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
                    let temp = fetch + '\n';
                    fs.appendFile('Queries.txt', temp, err => {
                        if (err) console.log(err);
                    });
                    res.send({
                        status: 0,
                        success: true,
                        msg: 'inserted',
                        data: null,
                    });
                }
            });
        }
        connection.release();
    });
}