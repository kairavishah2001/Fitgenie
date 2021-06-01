const pool = require('../pool');

exports.cart = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("CONNECTION ERROR: " + err.message);
            res.send({
                status: 0,
                msg: err.message,
                success: false,
                data: null,
            });
        } else {
            let fetch = "select c.*, d.* from cart c left join menu d on d.dishId = c.dishId where userId = '" + JSON.parse(req.cookies.cookie).userId + "';";
            pool.query(fetch, (err, result) => {
                if (err) {
                    console.log("QUERY ERROR: " + err.message);
                    res.send({
                        status: 0,
                        msg: err.message,
                        success: false,
                        data: null,
                    });
                } else {
                    res.send({
                        status: 1,
                        msg: 'Fetched',
                        success: true,
                        data: result,
                    });
                }
            });
        }
        connection.release();
    });
}
