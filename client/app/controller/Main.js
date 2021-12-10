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
                    var parent = grid.up().up();
                    parent.getEl().mask("Please wait...", "x-mask-loading");
                    Ext.Ajax.request({
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
                    });
                }
            }
        });
    }
});
