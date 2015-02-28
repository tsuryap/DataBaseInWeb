Ext.define('dbview.store.GridStore',{
requires:['dbview.model.TableModel'],
extend:'Ext.data.Store',
model:'dbview.model.TableModel',
proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root:'items'
                  }
       }

});