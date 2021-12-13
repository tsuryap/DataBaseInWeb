Ext.define('dbview.view.ViewTablesGrid', {
    extend: 'Ext.grid.Panel',
    requires: ['dbview.store.GridStore'],
    xtype: 'viewTablesGrid',
    title: '',
    columns: [],
    columnLines: true,
    initComponent: function () {
        var me = this;
        var store = Ext.create('dbview.store.GridStore');
        Ext.apply(me, {
            store: store,
            viewConfig: {
                stripeRows: true
            },
            bbar: {
                xtype: 'pagingtoolbar',
                store: store,
                displayInfo: true
            }

        });
        me.callParent(arguments);
    }

});
