exports.getColumnsAndRowsOfTable=function(connection,req,res){
    var data={
         columns:'',
         rows:'',
         total: '',
     };
    connection.query('select count(*) as count from ??', [req.query.tableName], (err, rec) => {
        console.log(rec);
        data.total = rec[0].count;
        var sqlQueryForRows='select * from ?? limit ' + req.query.start + ','+ req.query.limit;
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
    });


    
}
