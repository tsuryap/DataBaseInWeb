Ext.define('dbview.view.TablesTree',{
extend:'Ext.tree.Panel',
requires:['dbview.store.TablesStore'],
xtype:'tablesTree',
heigth:300,
root:{
  text:'Tables',  
},
initComponent:function(){
	var me=this;
	Ext.apply(me,{
	 tbar:[
	       {
	       	text:'Refresh',
            //iconCls :"refresh",
	       	handler:function(){
	       		me.store.load();
	       	}
	       }
	      ],
     store:Ext.create('dbview.store.TablesStore')     
	});
	me.callParent(arguments);
  }
});