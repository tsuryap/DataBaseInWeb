Ext.define('dbview.view.ViewTablesGrid',{
	extend:'Ext.grid.Panel',
	requires:['dbview.store.GridStore'],
    xtype:'viewTablesGrid',
    title:'',
    columns:[],
     columnLines: true,
    initComponent:function(){
	var me=this;
	Ext.apply(me,{
       store:Ext.create('dbview.store.GridStore'),
       viewConfig:{
       	stripeRows:true
       }
	});
	
    me.callParent(arguments);
  }
  
});