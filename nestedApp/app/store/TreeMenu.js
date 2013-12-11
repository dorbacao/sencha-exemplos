Ext.define('nestedApp.store.TreeMenu',{
	extend:'Ext.data.TreeStore',
	requires:[
		'nestedApp.classes.Menu'
	],
	config:{
		model:'nestedApp.model.ListItem',
		storeId:'menuStore',
		autoLoad:true,
		defaultRootProperty:'items',
		root:Ext.create('nestedApp.classes.Menu')
      
	},
	
	
});