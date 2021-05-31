const pool = require('../pool');

exports.deleteItemCart = (req, res) => {
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
            // let id = JSON.parse(req.cookies.cookie).userId;
            let fetch = 'delete from cart where userId="' + JSON.parse(req.cookies.cookie).userId + '" and dishId = "' + req.headers.id + '";';
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
                    // console.log(result)
                    res.send({
                        status: 1,
                        success: true,
                        msg: "DELTED",
                        data: null,
                    });
                }
            });
        }
    })
}