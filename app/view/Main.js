Ext.define('EscuelaFutbol.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype  : "container",
        style  : "border: 1pt solid black;background : lightgray",
        height : 120,
        items  : [{
          xtype : "bannerppal"
        }]
    },{
        region: 'west',
        xtype: 'panel',
        title: 'Menu principal',
        width: 300,
        items : [{
            xtype : 'menuppal'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        id : 'x_principal'
    }]
});