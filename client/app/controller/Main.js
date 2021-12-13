Ext.define('dbview.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['dbview.view.TablesTree', 'dbview.view.ViewTablesGrid', 'Ext.Ajax'],
    refs: [
           { ref: 'tree', selector: 'tablesTree' },
           { ref: 'grid', selector: 'viewTablesGrid' }
         ],
    init: function () {
        this.control({
            'tablesTree': {

                itemclick: function (s, r) {
                    if(r.hasChildNodes()) {
                        return;
                    }
                    var me = this;
                    var grid = me.getGrid();
                    var store = grid.getStore();
                    var parent = grid.up().up();
                    parent.getEl().mask("Please wait...", "x-mask-loading");
                    store.getProxy().extraParams = {
                        tableName: r.data.text,dbName:r.parentNode.data.text
                    }
                    store.model.setFields([]);
                    store.load({
                        callback: function(records, operation, success) {
                            Ext.each(records, (item) => {
                               item.data = item.raw;
                            });
                            parent.getEl().unmask();
                            var response = Ext.decode(operation.response.responseText);
                            var columns = [];
                            var fields = [];
                            var colName = undefined;
                            for (var i = 0; i < response.columns.length; i++) {
                                colName = response.columns[i].column_name;
                                columns.push({ header: colName, dataIndex: colName, tdCls: 'formatCell' });
                                fields.push(colName);
                            }
                            store.model.setFields(fields);
                            grid.reconfigure(store, columns);
                            grid.setTitle(r.data.text);

                        }
                    });
                   /* Ext.Ajax.request({
                        url: 'getColumnNameAndRowsOfTable',
                        params: { 'tableName': r.data.text,dbName:r.parentNode.data.text},
                        method: 'get',
                        success: function (response) {
                            var response = Ext.decode(response.responseText);
                            var rows = {
                                'items': response.rows
                            };
                            var columns = [];
                            var fields = [];
                            var colName = undefined;
                            for (var i = 0; i < response.columns.length; i++) {
                                colName = response.columns[i].column_name;
                                columns.push({ header: colName, dataIndex: colName, tdCls: 'formatCell' });
                                fields.push(colName);
                            }
                            var store = grid.getStore();
                            store.model.setFields(fields);
                            store.loadRawData(rows);
                            grid.reconfigure(store, columns);
                            grid.setTitle(r.data.text);
                            parent.getEl().unmask();
                        },
                        failure: function () {
                            Ext.Msg.alert("Hey Something went wrong")
                        }
                    });*/
                }
            }
        });
    }
});
