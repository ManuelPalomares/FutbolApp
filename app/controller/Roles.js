Ext.define('EscuelaFutbol.controller.Roles', {
    extend: 'Ext.app.Controller',
    requires:['Ext.tip.*'],
    init: function() {
    	this.control({
    		'#x_guardarRoles': {
    			click: this.guardarRoles
    		},
                '#x_NuevoRol':{
                    click :this.rolNuevo
                }
    	});
     },
     guardarRoles : function(){
         //llama el formulario
         var formularioRoles = Ext.getCmp("x_formularioRoles");
         //se llama el host 
         var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
         //submit y la configuracion y se programa la respuesta
         formularioRoles.getForm().submit({
             clientValidation: true,
             waitMsg : "Guardando los datos",
             params:{accion : "GUARDAR"},
             url :host+"php/seguridad/roles.php",
             success: function(form,action){
                 console.log(action.result);
                 //Se programa el evento exitoso
                 Ext.MessageBox.alert('Proceso',action.result.msg);
                 Ext.getCmp("x_grid_roles").getStore().load();
             },
             failure : function(form,action){
                 //Se programa el evento fallido del servidor
              Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');   
             }
         });
     },
     rolNuevo: function(){
         //llama el formulario
         var formularioRoles = Ext.getCmp("x_formularioRoles");
         formularioRoles.getForm().reset();
         Ext.getCmp("x_descripcionRol").focus();
     }
     });