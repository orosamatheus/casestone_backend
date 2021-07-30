module.exports = {
    "type": "postgres",
     "url": process.env.DATABASE_URL, 
    "migrations": ["dist/database/migrations/*.js"],
    "entities": ["dist/modules/**/entities/*.js"],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    },
    "extra": {
        "ssl": {
          "rejectUnauthorized": false
        }
      }
  }