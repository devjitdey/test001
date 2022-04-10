var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const env = require('./app/config/env.js');

app.use(cors());
app.use(bodyParser.json());
//app.use(express.static("build"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
  });

require("./app/router/router.js")(app);
const db = require("./app/config/db.config.js");

db.sequelize.sync({ force: env.forceMigrate }).then(() => {
    console.log(`Drop and Resync with { force: ${env.forceMigrate} }`);
});

app.options('*', async(req, res) => res.send(200));

// Create a Server
var server = app.listen(5000,"0.0.0.0", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

module.exports = app;