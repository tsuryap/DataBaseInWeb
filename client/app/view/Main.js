Ext.define('dbview.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'dbview.view.TablesTree',
        'dbview.view.ViewTablesGrid'
    ],
    xtype: 'app-main',
    renderTo:document.body,
    layout: {
        type: 'border'
    },
    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'List of tables',
        layout:'fit',
        width: 200,
        items:[{xtype:'tablesTree'}]
    },{
        region: 'center',
        xtype: 'panel',
        autoScroll:true,
        items:[{
            xtype:'viewTablesGrid',
            height: 700,
        }]
    }]
});
