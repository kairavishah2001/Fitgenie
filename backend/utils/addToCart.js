const pool = require('../pool');

exports.addToCart = (req, res) => {

    let id = req.headers.id;

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
            console.log("dish id to be added= " + id);
            let fetch = "insert into cart '" + id + "';";
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