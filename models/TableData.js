exports.getColumnsAndRowsOfTable=function(connection,req,res){
    var data={
         columns:'',
         rows:''
     };
    var sqlQueryForRows='select * from ??'
    connection.query(sqlQueryForRows,[req.query.tableName],function(err,rows,fields){
       data.rows=rows;
       var sqlQueryForColumnNames='select column_name  FROM   information_schema.columns WHERE  table_name = ?';
       connection.query(sqlQueryForColumnNames,[req.query.tableName],function(err,results){
            data.columns=results;
            res.json(data);
       });
       
    });
    
}