const pool = require('../pool'); 

exports.getDish = (req, res) => {
    pool.getConnection((err) => {
        if(err) {
            res.send({
                status: 0,
                msg: err.message,
                success: false,
                data: null,
            });
        } else {
            let fetch = "select * from menu where dishId = " + req.headers.id + ";";
            pool.query(fetch, (err, result) => {
                if(err) {
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
    });
}