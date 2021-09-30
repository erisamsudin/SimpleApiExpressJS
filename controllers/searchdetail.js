'use strict';
// import models
import fetch from "node-fetch";
import { executeQuery } from "../middleware/connections.js";

export const searchdetail = async (req, res) => {
    let movietitle = req.params.movietitle;
    let apikey = "74de599c";
    let timeNow = new Date().toISOString().
        replace(/T/, ' ').      
        replace(/\..+/, '')
    try {
        let url = `http://www.omdbapi.com/?apikey=${apikey}&t=${movietitle}`;
        let settings = { method: "Get" };
        var sql;
        fetch(url, settings)    
            .then(res => res.json())
            .then((jsonData) => {
                res.json(jsonData);
                if (jsonData.Response === "False") {
                    sql = `INSERT INTO log_api (apiurl,date_request,status_request) 
                    VALUES ('${req.originalUrl}', '${timeNow}','FAIL ${jsonData.Error}')`;
                    executeQuery(sql, function (error, rows,) {
                        if (error) {
                            response.error(error)
                        } else {
                            response.ok(rows, res)
                        }
                    });
                } else {
                    sql = `INSERT INTO log_api (apiurl,date_request,status_request) 
                    VALUES ('${req.originalUrl}', '${timeNow}','SUCCESS')`;

                    executeQuery(sql, function (error, rows,) {
                        if (error) {
                            response.error(error)
                        } else {
                            response.ok(rows, res)
                        }
                    });

                }
            });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}