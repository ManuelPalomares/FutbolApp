Ext.define('EscuelaFutbol.controller.Login', {
    extend: 'Ext.app.Controller',
    init: function() {
    	this.control({
    		'#x_login': {
    			click: this.login
    		}
    	});
     },
     login : function(){

        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        var formaLogin = Ext.getCmp("x_formLogin");

        formaLogin.getForm().submit({
            clientValidation: true,
            waitMsg : "Consultando",
            params: {"accion": "CONECTARSE"},
            url :host+"php/session/logaccess.php",
            success : function(form,action){
                
                if(action.result.mensaje_error !=undefined){
                    Ext.Msg.alert('Mensaje',action.result.mensaje_error);
                    return;
                }

                var win = Ext.getCmp("x_ventanalogin");
                win.close();
                Ext.create("EscuelaFutbol.view.Viewport");

            },
            failure : function(form,action){
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
        /*Ext.Ajax.request({
            url :host+"php/session/logaccess.php",
            success : function(){

            },
            failure : function(response){
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }
        });*/
     }

});
