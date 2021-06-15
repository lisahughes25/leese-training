require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
"development": {
  "username": DB_USERNAME,
  "password": DB_PASSWORD,
  "database": 'projects_api_development',
  "dialect": 'postgres'
  },
  "test": {
    "database": "projects_api_test",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  }
}