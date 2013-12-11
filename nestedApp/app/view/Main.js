Ext.define('nestedApp.view.Main', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    _getItemTextTpl:function(node){
            
            return [
                '<div data-icon="57">',
                    '<div>',
                    '{text}',
                    '</div>',
                    
                '</div>'
            ].join('');
        },
    config: {
        store:'menuStore',

        
        
    }
});
