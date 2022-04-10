const env = require('./env.js');

// Create a database connection using sequelize 
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:env.dialectOptions,
  //operatorsAliases: false
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../model/user.js')(sequelize, Sequelize);
db.menu = require('../model/menu.js')(sequelize, Sequelize);

module.exports = db;