  var express         = require('express'),
      mySqlConnection = require('./server-db.js'),
      listOfTablesInDB= require('./models/ListOfTablesInDB.js'),
      tableData       = require('./models/TableData.js');
  var app             = express()
  
  app.use(express.static(__dirname+"\\client"));
  
  var connection=mySqlConnection.createConnection();
 // var dbName=mySqlConnection.getDbName();

 // redirecting to home page 
  app.get('/', function (req, res) {
  	 res.sendFile(__dirname+"\\client\\index.html");
  })


  // getting list of tables and sending response to client
  app.get('/getTables', function (req, res) {
       listOfTablesInDB.getTablesInfo(connection,req, res);

  });

 //getting columsn and rows of selected table                  
  app.get('/getColumnNameAndRowsOfTable', function (req, res) {
    connection.changeUser({database:req.query.dbName});
      tableData.getColumnsAndRowsOfTable(connection,req,res);
  });
  var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

  })