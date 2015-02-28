Ext.define('dbview.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'dbview.view.Main'
    ],
    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
