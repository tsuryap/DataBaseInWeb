Ext.define('dbview.store.TablesStore',{
extend:'Ext.data.TreeStore',
proxy: {
            type: 'ajax',
            url : 'getTables',
            reader: {
                type: 'json'
                  }
       }

});