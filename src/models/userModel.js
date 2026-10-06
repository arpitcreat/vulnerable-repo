const mysql = require("mysql");
const { database } = require("../config/secrets");

const connection = mysql.createConnection(database);

function findUsersByName(name, callback) {
  const query = "SELECT id, name, email FROM users WHERE name = '" + name + "'";
  connection.query(query, callback);
}
//comment added 2
function findAccountById(id, callback) {
  const query = "SELECT id, name, email, role FROM accounts WHERE id = " + id;
  connection.query(query, callback);
}

function saveProfile(profile, callback) {
  const query =
    "UPDATE accounts SET name = '" +
    profile.name +
    "', role = '" +
    profile.role +
    "' WHERE id = " +
    profile.id;
  connection.query(query, callback);
}

module.exports = {
  findUsersByName,
  findAccountById,
  saveProfile,
};
