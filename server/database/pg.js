const { Pool } = require("pg");
const keys = require("../config/keys");

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

function setupDatabase() {
  pgClient.on("connect", (client) => {
    client
      .query("CREATE TABLE IF NOT EXISTS values (number INT)")
      .catch((err) => console.error(err));
  });
}

module.exports = {
  pgClient,
  setupDatabase,
};
