const environment = process.env.NODE_ENV || 'development';
const config= {
  "development" : {
  "database": 'jvmultbo',
  "username": 'jvmultbo',
  "password": '',
  "host": 'postgres://jvmultbo:DhegOaBySPYxej6eLC4LTe3J7_gGA1L9@arjuna.db.elephantsql.com/jvmultbo',
  "dialect": 'postgres',
  "forceMigrate":true,
}
}
const env=config[environment]
module.exports = env;
