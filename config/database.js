var sql = require('mssql');

var dbConfig = {
    server: process.env.SERVER,
    database: process.env.DATABASE,
    user: process.env.UID,
    password: process.env.PWD,
    port: parseInt(process.env.PORT_DB),
    options: {
          encrypt: JSON.parse(process.env.ENCRYPT)
      }
};

(testConnection = () => {
    var conn = new sql.ConnectionPool(dbConfig);

    conn.connect().then(() => {
        console.log('Successfull connected to database by mssql');
    }).catch((err) => {
        console.log(err);
    })
})();