require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection:
      "postgres://postgres:Miku3039@localhost:5432/cc14_api_solo_project",
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
    charset: "utf8",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/production",
    },
  },
};
