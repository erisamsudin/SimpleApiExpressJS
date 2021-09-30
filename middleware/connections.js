import mysql from "mysql";

const dbServer = mysql.createConnection({
  host     : "nagatech-web.clkz2ekrv9lh.ap-southeast-1.rds.amazonaws.com",
  user     : "test",
  password : "indonesia",
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
