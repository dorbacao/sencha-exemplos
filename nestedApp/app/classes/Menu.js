Ext.define('nestedApp.classes.Menu',{
  "items": [
    {        
        iconCls:'arrow_right',
        text: "1 - Recebimento",        
        "items":[]
    },
    {
        text: "2 - Endereçamento",
        "items":[]
    },
    {
        text: "3 - Movimentação",       
        "items":[
            {text: "1 - Movimentação Avulsa"},  
            {text: "2 - Movimentação Planejada"},   
        ]
    },
    {
        text: "4 - Separação",
        "items":[]
    },
    {
        text: "5 - Expedição",
        "items":[]
    },

    ]
});

