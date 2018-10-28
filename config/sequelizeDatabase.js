var Sequelize = require('sequelize');

var connection = new Sequelize(process.env.DATABASE, process.env.UID, process.env.PWD, {
  host: process.env.SERVER,
  dialect: 'mssql',
  port: parseInt(process.env.PORT_DB),
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    encrypt: JSON.parse(process.env.ENCRYPT)
  }
});

(testConnection = () => {
  connection.authenticate().then(() => {
    console.log('Successfull connected to database by sequelize!');
  }).catch(err => {
    console.log(err);
  })
})();