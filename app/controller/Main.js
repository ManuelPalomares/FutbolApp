Ext.define('EscuelaFutbol.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function() {
    	this.control({
    		'#x_menuprincipal button': {
    			itemclick: this.llamaOpcion
    		},
            'button[iconCls=x_iconosBotones] >menu':{
                    click: this.llamaOpcion
                }
    	});
     },
     llamaOpcion : function(btn,item){
        var itemOpcion = item.text;
        if(itemOpcion =="Registro de Nuevos clientes"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'nuevosClientes'
                }],
                closable: true
            });
            ventana.show();
        }

        if(itemOpcion =="Envio de informacion de eventos y partidos"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'envioSolicitudesNuevas'
                }],
                closable: true
            });
            ventana.show();
        }

        if(itemOpcion =="Citacion de prueba deportiva"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'citacionDeportiva'
                }],
                closable: true
            });
            ventana.show();
        }

        if(itemOpcion =="Ingreso de pago"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'recaudo'
                }],
                closable: true
            });
            ventana.show();
        }

        if(itemOpcion =="Generacion manual de cobro de pago"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'clientesPagoPendientes'
                }],
                closable: true
            });
            ventana.show();
        }


        if(itemOpcion =="Impresion de recibo de pago"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'impreReciboPag'
                }],
                closable: true
            });
            ventana.show();
        }

        if(itemOpcion =="Registro de suscripcion"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'suscripcion'
                }],
                closable: true
            });
            ventana.show();
        }

        if(itemOpcion =="Jugador"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'jugador'
                }],
                closable: true
            });
            ventana.show();
        }

        if(itemOpcion =="Actualizar Datos personales"){
            //alert(":_D");
            var ventana = Ext.create("Ext.window.Window",{
                modal: true, 
                width: 900,
                height : 600,
                autoScroll:true,
                title : itemOpcion,
                maximizable: true,
                items : [{
                    xtype : 'actualizarDatosJugador'
                }],
                closable: true
            });
            ventana.show();
        }

     }
    /*llamaOpcion : function(vthis,rec){
        alert(":D");
        return;
    	console.log(rec.data.text);

    	//demo 
    	if(rec.data.text =="Registro de Nuevos clientes"){
    		//alert(":_D");
    		var panelPpal = Ext.getCmp("x_principal");
    		
    		var tab = panelPpal.add({
    			title : rec.data.text,
    			closable: true,
    			xtype : "nuevosClientes"
    		});
    		panelPpal.setActiveTab(tab);

    	}

        if(rec.data.text =="Envio de informacion de eventos y partidos"){
            //alert(":_D");
            var panelPpal = Ext.getCmp("x_principal");
            
            var tab = panelPpal.add({
                title : rec.data.text,
                closable: true,
                xtype : "envioSolicitudesNuevas"
            });
            panelPpal.setActiveTab(tab);

        }

        if(rec.data.text =="Citacion de prueba deportiva"){
            //alert(":_D");
            var panelPpal = Ext.getCmp("x_principal");
            
            var tab = panelPpal.add({
                title : rec.data.text,
                closable: true,
                xtype : "citacionDeportiva"
            });
            panelPpal.setActiveTab(tab);

        }

        
        if(rec.data.text =="Ingreso de pago"){
            //alert(":_D");
            var panelPpal = Ext.getCmp("x_principal");
            
            var tab = panelPpal.add({
                title : rec.data.text,
                closable: true,
                xtype : "recaudo"
            });
            panelPpal.setActiveTab(tab);

        }

        if(rec.data.text =="Generacion manual de cobro de pago"){
            //alert(":_D");
            var panelPpal = Ext.getCmp("x_principal");
            
            var tab = panelPpal.add({
                title : rec.data.text,
                closable: true,
                xtype : "clientesPagoPendientes"
            });
            panelPpal.setActiveTab(tab);

        }

        if(rec.data.text =="Impresion de recibo de pago"){
            //alert(":_D");
            var panelPpal = Ext.getCmp("x_principal");
            
            var tab = panelPpal.add({
                title : rec.data.text,
                closable: true,
                xtype : "impreReciboPag"
            });
            panelPpal.setActiveTab(tab);

        }

        if(rec.data.text =="Registro de suscripcion"){
            
            var panelPpal = Ext.getCmp("x_principal");
            
            var tab = panelPpal.add({
                title : rec.data.text,
                closable: true,
                xtype : "suscripcion"
            });
            panelPpal.setActiveTab(tab);

        }

       if(rec.data.text =="Jugador"){
            
            var panelPpal = Ext.getCmp("x_principal");
            
            var tab = panelPpal.add({
                title : rec.data.text,
                closable: true,
                xtype : "jugador"
            });
            panelPpal.setActiveTab(tab);

        }
        

    }*/
});
