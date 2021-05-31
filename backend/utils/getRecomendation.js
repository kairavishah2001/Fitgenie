const pool = require('../pool');

exports.getRecomendation = (req, res) => {
    let workoutId = req.headers.id;
    let userId = JSON.parse(req.cookies.cookie).userId;
    let diseaseString = [];
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
            let query1 = "SELECT userMed from medicalDetails where userId = '" + userId + "';";
            console.log(query1);
            pool.query(query1, (err, result) => {
                if (err) {
                    console.log("SQL QUERY RUN ERROR: in 1st query" + err.message);
                    res.send({
                        status: 0,
                        msg: err.message,
                        success: false,
                        data: null,
                    });
                } else {
                    console.log(result[0]);
                    diseaseString= result[0];
                }
            });
            let fetch = 'call SP_SplitString_medDets("' + diseaseString + '");';
            pool.query(fetch, (err, result) => {
                if (err) {
                    console.log("SQL QUERY RUN ERROR:|||||| " + err.message);
                    res.send({
                        status: 0,
                        msg: err.message,
                        success: false,
                        data: null,
                    });
                } else {
                    console.log
                    let fetch1 = `call preferencesIng(` + userId + `);`;
                    pool.query(fetch1, (err, result) => {
                        if (err) {
                            console.log("SQL QUERY RUN ERROR:****** " + err.message);
                            res.send({
                                status: 0,
                                msg: err.message,
                                success: false,
                                data: null,
                            });
                        } else {
                            let fetch2 = `call denied_recommendation();`;
                            pool.query(fetch2, (err, result) => {
                                if (err) {
                                    console.log("SQL QUERY RUN ERROR: " + err.message);
                                    res.send({
                                        status: 0,
                                        msg: err.message,
                                        success: false,
                                        data: null,
                                    });
                                 }// else {
                                //     let fetch3 = `call final_recommendation(` + workoutId + `);`;
                                //     pool.query(fetch3, (err, Finalresult) => {
                                //         if (err) {
                                //             console.log("SQL QUERY RUN ERROR: " + err.message);
                                //             res.send({
                                //                 status: 0,
                                //                 msg: err.message,
                                //                 success: false,
                                //                 data: null,
                                //             });
                                //        }// else {
                                //             // let query1 = "SELECT * from menu m left join finalTable f on  m.dishId = f.dishId;";
                                //             // pool.query(query1, (err, result) => {
                                //             //     if (err) {
                                //             //         console.log("SQL QUERY RUN ERROR: " + err.message);
                                //             //         res.send({
                                //             //             status: 0,
                                //             //             msg: err.message,
                                //             //             success: false,
                                //             //             data: null,
                                //             //         });
                                //             //     } else {
                                //             //         alert(result);
                                //             //         diseaseString= result;
                                //             //     }
                                //             // });
                                //         }
                                //     });
                                // }
                            });
                        }
                    });
                }
            });
         }
    })
}