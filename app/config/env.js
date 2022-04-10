const environment = process.env.NODE_ENV || 'development';
const config= {
  "development" : {
  "database": 'jvmultbo',
  "username": 'jvmultbo',
  "password": '',
  "host": '127.0.0.1',
  "dialect": 'postgres',
  "forceMigrate":true,
}
}
const env=config[environment]
module.exports = env;
