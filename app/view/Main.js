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
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1'
        }]
    }]
});