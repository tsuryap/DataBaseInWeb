exports.getColumnsAndRowsOfTable=function(connection,req,res){
    var data={
         columns:'',
         rows:''
     };
    var sqlQueryForRows='select * from ?? limit  100'
    connection.query(sqlQueryForRows,[req.query.tableName],function(err,rows,fields){
       data.rows=rows;
       var sqlQueryForColumnNames='select column_name  FROM   information_schema.columns WHERE  table_name = ?';
       connection.query(sqlQueryForColumnNames,[req.query.tableName],function(err,results){
           results.forEach(item => {
               item.column_name = item.column_name ? item.column_name: item.COLUMN_NAME;
           });
           data.columns=results;
           res.json(data);
       });
       
    });
    
}
