const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
  database: process.env.DB_DATABASE, // Nom de la base de données
  host: process.env.DB_HOST,         // Hôte de la base de données
  user: process.env.DB_USER,         // Nom d'utilisateur de la base de données
  password: process.env.DB_PASSWORD, // Mot de passe de la base de données
});

connection.connect(function (err) {
  if (err) {
    throw err;
  }
});

// Drop matricules table if Exists!
let sql1 = "DROP TABLE IF EXISTS matricules";

connection.query(sql1, function (err, results) {
  if (err) throw err;
});

// Create Matricules Table.
let sql2 =
  "CREATE TABLE matricules " +
  " (Id INT not null AUTO_INCREMENT, " +
  " matricule VARCHAR(20), " +
  " nom VARCHAR(255), " +
  " prenom VARCHAR(255), " +
  " status VARCHAR(255), " +
  " datedenaissance DATE, " +
  " PRIMARY KEY (Id) )";
connection.query(sql2, function (err, results) {
  if (err) throw err;
 // console.log("Table matricules created");
});

//insert data

const insertData = (dataArray) => {
  let sql3 = "INSERT INTO matricules (matricule, nom, prenom, status, datedenaissance) VALUES ?";
  let values = dataArray.map((item) => [
    item.matricule,
    item.nom,
    item.prenom,
    item.status,
    item.datedenaissance
  ]);

  return connection.query(sql3, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of matricules inserted: " + result.affectedRows);

    // Fermer la connexion après l'insertion
    connection.end(function (err) {
      if (err) throw err;
      console.log("Connexion à la base de données fermée.");
    });
  });
};
module.exports = insertData;
