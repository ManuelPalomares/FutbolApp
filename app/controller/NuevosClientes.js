Ext.define('EscuelaFutbol.controller.NuevosClientes', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*'],
    init: function() {
        this.control({
            '#x_guardarNuevoCliente': {
                click: this.guardarNuevosClientes
            },
            '#x_NuevoCliente': {
                click: this.nuevoCliente
            }
        });
    },
    guardarNuevosClientes: function() {
        //llama el formulario
        var formularioSuscriptores = Ext.getCmp("x_formularioNuevosClientes");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //submit y la configuracion y se programa la respuesta
        var accion_send = "GUARDAR";

        //si el codigo del campono es nulo actualiza el dato
        if (Ext.getCmp("x_codigoSuscriptor").getValue() !== null) {
            accion_send = "ACTUALIZAR";
        }
        
        //envio de los datos digitados al servidor
        formularioSuscriptores.getForm().submit({
            clientValidation: true,
            waitMsg: "Guardando los datos",
            params: {accion: accion_send},
            url: host + "php/gestionDeportiva/nuevosClientes.php",
            success: function(form, action) {
                console.log(action.result);
                //mostrar mensaje
                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }
                //retorna el id que se almaceno para el dato de la llave primaria 
                Ext.getCmp("x_codigoSuscriptor").setValue(action.result.newId);
                //mensaje que cuardo con exito
                Ext.MessageBox.alert('Proceso', action.result.msg);
                
                //recargar la grilla de datos 
                //Ext.getCmp("x_grid_suscriptores").getStore().load();
            },
            failure: function(form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
    },
    nuevoCliente: function() {
        //llama el formulario
        var formularioSuscriptores = Ext.getCmp("x_formularioNuevosClientes");
        //resetear el formulario 
        formularioSuscriptores.getForm().reset();
        Ext.getCmp("x_parentescoClienteNuevo").focus();
    },
    cargarDatosAformulario: function(grid, record) {
        //llama el formulario
        var formularioRoles = Ext.getCmp("x_formularioRoles");

        formularioRoles.getForm().setValues(record.data);
    }
});