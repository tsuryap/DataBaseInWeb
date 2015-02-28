var mysql      = require('mysql'),
    nconf      =require('nconf');

nconf.env().file({ file: 'db-config.json'});
var dbConfig = nconf.get();
module.exports = {
  createConnection: function() {
     var connection = mysql.createConnection({
                            host: dbConfig.hostname,
                            port: dbConfig.port,
                            user: dbConfig.user,
                            password: dbConfig.password,
                            database: dbConfig.db
                });
	 return connection;
  },
  getDbName:function(){
    return dbConfig.db;
  }
};