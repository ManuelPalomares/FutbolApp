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
    	width : "60%",
    	style : "margin :0.5em;display:inline-block;",
    	html   : "<img  alt='logo' width='15%' height='15%' src='resources/img/logoEscueladeFutbol.png'></img><div class='x_tituloApp'>Sistema de informacion Escuela de Futbol Champions</div>"
    },{
    	xtype : "container",
        width : "30%",
        cls   : "x_panelSession",
        layout: {
            type: 'column',       // Arrange child items vertically
            align: 'center'    // Each takes up full width
        },
    	items : [{
    		xtype : "container",
            items :[{xtype:"label",id:"x_labelUsuario",text:"Nombre de usuario : "},{xtype:"label",id:"x_labelNombreUsuario",text:""}]
    	},{
    		xtype : "button",
            id    : "x_botonCerrarSesion",
    		text  : "Cerrar Sesion"
    	}]
    }]
});