Ext.define('EscuelaFutbol.view.MenuPrincipalPanel', {
extend: 'Ext.container.Container',
alias : 'widget.MenuppalPanel',
requires:['Ext.tab.Panel'],
autoScroll: true,
initComponent: function() {
	var me = this;
	Ext.applyIf(me, {
		items: [{
			xtype : "panel",
			title : "Menu principal",
			id    : "x_menuPanelPrincipal",
			modal : true,
                        height: 800,
			layout: {  type: 'column'},
                        bodyStyle :{
                            "background" :"url(resources/img/logoEscueladeFutbol.png),white",
                            "background-size" : "25%",
                            "background-repeat" : "no-repeat",
                            "background-position" : "center",
                            "background-attachment":"fixed"
                        }
		}]
	});
	me.callParent(arguments);
}

});