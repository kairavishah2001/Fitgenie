const cookieParser = require('cookie-parser');
const pool = require('../pool');

exports.addToCart = (req, res) => {

    let id = req.headers.id;
    console.log(req.cookies);
    let userId = req.cookies.cookie.userId ;

    pool.getConnection((err) => {
        if (err) {
            console.log("SQL CONNECTION ERROR: " + err.message);
            res.send({
                status: 0,
                msg: err.message,
                success: false,
                data: null,
            });
        } else {
            
            let fetch = "insert into cart values('"+ JSON.parse(req.cookies.cookie).userId +"','" + id +"','"+ 1 + "');";

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
                    res.send({
                        status: 1,
                        msg: 'Added to cart',
                        success: true,
                        data: [],
                    });
                }
            });
        }
    })
}