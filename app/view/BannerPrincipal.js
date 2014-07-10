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
    	html   : "<img alt='logo' width='50%' height='50%' src='http://www.isggaming.com/images/banner_cat_FIFA.jpg'></img>"
    },{
    	xtype : "container",
    	style : "margin:10px;padding:1em;background:white",
    	items : [{
    		xtype : "container",
    		html  : "<div>Nombre Usuario: Manuel Palomares</div><div>Rol Administrador</div>"
    	},{
    		xtype : "button",
    		text  : "Cerrar Sesion"
    	}]
    }]
});