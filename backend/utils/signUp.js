const e = require('express');
const pool = require('../pool');
const fs = require('fs');

exports.signUp = (req, res) => {
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
            let fetch = "insert into user(firstName, lastName, email, age, weight, height, bloodGroup) values('" + req.body.firstName + "','" + req.body.lastName + "','" + req.body.email + "','" + req.body.age + "','" + req.body.weight + "','" + req.body.height + "','" + req.body.bloodGroup + "');";
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
                        if (err) console.log("FILE ERROR: " + err);
                    });
                    res.send({
                        status: 1,
                        success: true,
                        msg: 'Added',
                        data: null,
                    });
                }
            })
        }
        connection.release();
    });
}