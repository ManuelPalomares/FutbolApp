Ext.define('EscuelaFutbol.view.BannerPrincipal', {
    extend: 'Ext.container.Container',
    requires :[
    'Ext.layout.container.Column'
    ],
    alias : "widget.bannerppal",
    layout: {
    	type: 'column',
    	align: 'left'
	},
    items : [{
    	xtype : "container",
    	width : "70%",
    	style : "margin :10px;",
    	html   : "<img alt='logo' width='15%' height='15%' src='resources/img/logoEscueladeFutbol.png'></img>"
    },{
    	xtype : "container",
        height: 100,
    	style : "margin:10px;padding:1em;background:lightgray;border:1pt solid black",
    	items : [{
    		xtype : "container",
            style : "background:",
            items :[{xtype:"label",id:"x_labelUsuario",text:"Nombre de usuario : "},{xtype:"label",id:"x_labelNombreUsuario",text:""}]
    	},{
    		xtype : "button",
            id    : "x_botonCerrarSesion",
    		text  : "Cerrar Sesion"
    	}]
    }]
});