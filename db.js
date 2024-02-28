import mysql from "mysql2";

var hostname = "35a.h.filess.io";
var database = "BlacklightMohit1_treepipeup";
var port = "3307";
var username = "BlacklightMohit1_treepipeup";
var password = "0b049f1b45e84ec301b3d14837fbeea7f3313d09";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
}).promise();

const connection = await con.connect()

if(connection.connectionId){
  console.log("database connected");
}
else console.log("database connection failed")


export default con;