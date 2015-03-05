exports.getTablesInfo = function (connection,req, res) {
    
    var jsonResponse = {
        "children": []
    };
    
    var dbArray=[];
    // query to get all tables in all databases 

    connection.query('SELECT distinct(table_schema) as text from information_schema.TABLES', function (err, rows, fields) {
       
        for (var i = 0; i<rows.length; i++) {
            rows[i].children = [];
            jsonResponse.children.push(rows[i]);
            dbArray.push(rows[i].text);
        }
        var sql = "SELECT  table_schema as dbname,table_name as tableName from information_schema.tables where table_schema in (?)";
         connection.query(sql,[dbArray],function (err, rowsWithTables, fields) {
            for(var i=0;i<rowsWithTables.length;i++){
                for(var j=0;j<rows.length;j++){
                    if(rowsWithTables[i].dbname===rows[j].text){
                      rows[j].children.push({text:rowsWithTables[i].tableName,leaf:true});
                    }
                }
            }
           res.json(jsonResponse);
         });
        
    });

}