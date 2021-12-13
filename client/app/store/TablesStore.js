Ext.define('dbview.store.TablesStore',{
extend:'Ext.data.TreeStore',
autoLoad:true,
proxy: {
            type: 'ajax',
            url : 'getTables',
            reader: {
                type: 'json'
            }
       }

});
