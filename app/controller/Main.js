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

    }
});
