Ext.define('dbview.view.ViewTablesGrid',{
	extend:'Ext.grid.Panel',
	requires:['dbview.store.GridStore'],
    xtype:'viewTablesGrid',
    title:'',
    columns:[],
	initComponent:function(){
	var me=this;
	Ext.apply(me,{
       store:Ext.create('dbview.store.GridStore')
	});
	
    me.callParent(arguments);
  }
  
});