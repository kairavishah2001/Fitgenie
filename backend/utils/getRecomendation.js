const pool = require('../pool');

exports.getRecomendation = (req,res) =>{
    let workoutId = req.headers.id;
    let userId = JSON.parse(req.cookies.cookie).userId ;

    pool.getConnection((err) => {
        if (err) {
            console.log("SQL CONNECTION ERROR: " + err.message);
            res.send({
                status: 0,
                msg: err.message,
                success: false,
                data: null,
                diseaseString:"",
            });
        } else {
            let query = "SELECT userMed from medicalDetails where userId = '" + userId + "';";
            pool.query(fetch2, (err, result) => {
                if (err) {
                    console.log("SQL QUERY RUN ERROR: " + err.message);
                    res.send({
                        status: 0,
                        msg: err.message,
                        success: false,
                        data: null,
                    });
                } else{
                    alert(result[0]);
                    this.setState({
                        diseaseString: result[0],
                    })
                }   
            });
            let fetch = `call SP_SplitString_medDets(` + diseaseString +`);`;
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
                    let fetch1 = `call preferencesIng(`+ userId +`);`;   
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
                                } else {
                                    let fetch3 = `call final_recommendation(`+ workoutId +`);`;   
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