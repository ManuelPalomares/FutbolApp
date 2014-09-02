Ext.define('EscuelaFutbol.view.MenuPrincipalPanel', {
extend: 'Ext.container.Container',
alias : 'widget.MenuppalPanel',
requires:['Ext.tab.Panel'],
initComponent: function() {
	var me = this;
	Ext.applyIf(me, {
		items: [{
			xtype : "panel",
			title : "Menu principal",
			style: {backgroundColor : "white"},
			modal : true,
			layout: {  type: 'hbox'},
			items : [{
				xtype : "button",
				text  : "Mercadeo y ventas",
				style : {margin:'0.5em'},
				height: 200,
				icon : 'http://www.aqua7.co.za/images/call-icon.png',
				iconAlign :'top',
				iconCls   : 'x_iconosBotones',
				 menu      : [
				 {text: 'Registro de Nuevos clientes'},
				 {text: 'Envio de informacion de eventos y partidos'}
				 ],
				
			},
			{
				xtype : "button",
				text  : "Evaluacion de jugadores nuevos",
				style : {margin:'0.5em'},
				height: 200,
				icon : 'http://pro-skillssoccer.com/wp-content/uploads/2014/05/cone_ball_icon.png',
				iconAlign :'top',
				iconCls   : 'x_iconosBotones',
				 menu      : [
				 {text: 'Citacion de prueba deportiva'},
				 {text: 'Registro de Evaluacion'}
				 ],
				
			},
			{
				xtype : "button",
				text  : "Inscripción y Gestión Deportiva",
				style : {margin:'0.5em'},
				height: 200,
				icon : 'http://eii.ulpgc.es/blogs/estudios-eii-mii/wp-content/uploads/sites/35/2014/04/inscripci%C3%B3n.png',
				iconAlign :'top',
				iconCls   : 'x_iconosBotones',
				 menu      : [
				 {text: 'Registro de suscripcion'},
				 {text: 'Jugador'},
				 {text: 'Comunicado de partidos'},
				 {text: 'Registro de ficha de seguimiento por jugador'},
				 {text: 'Reclasificacion de categorias individual o grupo'}
				 ],
				
			},
			{
				xtype : "button",
				text  : "Recaudos",
				style : {margin:'0.5em'},
				width : 200,
				height: 200,
				icon : 'http://4.bp.blogspot.com/-vmL1TPXUIH8/Tu3cS3-IwaI/AAAAAAAAADw/jKsr_I0DMmM/s1600/billetes.png',
				iconAlign :'top',
				iconCls   : 'x_iconosBotones',
				 menu      : [
				 {text: 'Generacion manual de cobro de pago'},
				 {text: 'Ingreso de pago'},
				 {text: 'Impresion de recibo de pago'},
				 {text: 'Notificacion de clientes morosos'}
				 ],
				
			}
			]
		}]
	});
	me.callParent(arguments);
}

});