exports.getTablesInfo=function(connection,dbName,req,res) {
	 var sql="SELECT table_name as text from information_schema.tables where table_schema = ?";
           connection.query(sql,[dbName],function(err,rows,fields){
           if(!err){
	            var jsonResponse={

	                 "children":[]
	            };
	            for(var i=0;i<rows.length;i++){
	              rows[i].leaf=true;
	              jsonResponse.children.push(rows[i]);
	            }
	           res.json(jsonResponse);
	       }
           else{
               console.log("db not connected");
           }
          
        });
}