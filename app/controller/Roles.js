Ext.define('EscuelaFutbol.controller.Roles', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*'],
    init: function() {
        this.control({
            '#x_guardarRoles': {
                click: this.guardarRoles
            },
            '#x_NuevoRol': {
                click: this.rolNuevo
            },
            '#x_eliminarRoles': {
                click: this.eliminarRoles
            },'#x_grid_roles':{
                itemclick : this.cargarDatosAformulario
            }
        });
    },
    guardarRoles: function() {
        //llama el formulario
        var formularioRoles = Ext.getCmp("x_formularioRoles");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //submit y la configuracion y se programa la respuesta
        var accion_send = "GUARDAR";

        //si el codigo del campono es nulo actualiza el dato
        if (Ext.getCmp("x_codigoRol").getValue() !== null) {
            accion_send = "ACTUALIZAR";
        }

        formularioRoles.getForm().submit({
            clientValidation: true,
            waitMsg: "Guardando los datos",
            params: {accion: accion_send},
            url: host + "php/seguridad/roles.php",
            success: function(form, action) {
                console.log(action.result);

                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }
                Ext.getCmp("x_codigoRol").setValue(action.result.newId);
                Ext.MessageBox.alert('Proceso', action.result.msg);
                Ext.getCmp("x_grid_roles").getStore().load();
            },
            failure: function(form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
    },
    rolNuevo: function() {
        //llama el formulario
        var formularioRoles = Ext.getCmp("x_formularioRoles");
        formularioRoles.getForm().reset();
        Ext.getCmp("x_descripcionRol").focus();
    },
    eliminarRoles: function() {
        //llama el formulario
        var formularioRoles = Ext.getCmp("x_formularioRoles");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        var accion_send  = "ELIMINAR";
        
         formularioRoles.getForm().submit({
            clientValidation: true,
            waitMsg: "Eliminando los registros",
            params: {accion: accion_send},
            url: host + "php/seguridad/roles.php",
            success: function(form, action) {
                //console.log(action.result);

                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }
                Ext.getCmp("x_codigoRol").setValue(action.result.newId);
                Ext.MessageBox.alert('Proceso', action.result.msg);
                Ext.getCmp("x_grid_roles").getStore().load();
            },
            failure: function(form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
        
    },
    cargarDatosAformulario: function(grid,record){
        //llama el formulario
        var formularioRoles = Ext.getCmp("x_formularioRoles");
        
        formularioRoles.getForm().setValues(record.data);
    }
});