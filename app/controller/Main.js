Ext.define('EscuelaFutbol.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function() {
    	this.control({
    		'#x_menuprincipal': {
    			itemclick: this.llamaOpcion
    		}
    	});
     },
    llamaOpcion : function(vthis,rec){
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

        

    }
});
