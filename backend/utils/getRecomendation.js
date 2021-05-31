const pool = require('../pool');

exports.getRecomendation = (req,res) =>{
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
            let fetch = `call m1(`+ +`,`+   +`);`;
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
                    let fetch1 = `call m2(`+ + `,`+   +`);`;   
                    pool.query(fetch1, (err, result) => {
                        if (err) {
                            console.log("SQL QUERY RUN ERROR: " + err.message);
                            res.send({
                                status: 0,
                                msg: err.message,
                                success: false,
                                data: null,
                            });
                        } else {
                            let fetch2 = `call m3(`+ +`,`+   +`);`;   
                            pool.query(fetch2, (err, result) => {
                                if (err) {
                                    console.log("SQL QUERY RUN ERROR: " + err.message);
                                    res.send({
                                        status: 0,
                                        msg: err.message,
                                        success: false,
                                        data: null,
                                    });
                                } else {
                                    let fetch3 = `call m4(`+ +`,`+   +`);`;   
                                    pool.query(fetch3, (err, Finalresult) => {
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
                                                msg: err.message,
                                                success: true,
                                                data: Finalresult,
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    })
}