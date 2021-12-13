Ext.define('dbview.store.GridStore', {
    requires: ['dbview.model.TableModel'],
    extend: 'Ext.data.Store',
    model: 'dbview.model.TableModel',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: 'getColumnNameAndRowsOfTable',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty: 'total'
        }
    }
});
