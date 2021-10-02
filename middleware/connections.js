import mysql from "mysql";

const dbServer = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "berasputih",
  database : "mit"
});

export const executeQuery = async (strQuery) =>{
  return new Promise(async(resolve, reject) => {
    dbServer.query(strQuery,(err, row, field) => {
        if(err) {
          return reject([err]);
        }
        return resolve(row);
    })
  })
}
