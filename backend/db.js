import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "linzcup",
});

connection.connect((err) => {
  if (err) console.error("DB-Verbindung fehlgeschlagen:", err);
  else console.log("Mit DB verbunden");
});

export default connection;
