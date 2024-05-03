import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "vishnupriya@97",
  database: "employemanagement",
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Successfully connected to database');
  connection.release();
});
export default db;