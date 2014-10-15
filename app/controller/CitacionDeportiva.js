Ext.define('EscuelaFutbol.controller.CitacionDeportiva', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*'],
    init: function() {
        this.control({
            '#x_guardarCita': {
                click: this.guardarCita
            },
            '#x_NuevaCita': {
                click: this.nuevaCita
            },
            '#x_eliminarCita': {
                click: this.eliminarCitas
            }, 
            '#x_grid_roles': {
                itemclick: this.cargarDatosAformulario
            }
        });
    },
    guardarCita: function() {
        //llama el formulario
        var formulario = Ext.getCmp("x_formularioCitaDeportiva");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //submit y la configuracion y se programa la respuesta
        var accion_send = "GUARDAR"; // es la misma que se encuentra en la base de datos de cada opcion

        //si el codigo del campono es nulo actualiza el dato
        if (Ext.getCmp("x_codigoCitaDeportiva").getValue() !== null) {
            accion_send = "ACTUALIZAR";
        }

        formulario.getForm().submit({
            clientValidation: true,
            waitMsg: "Guardando los datos",
            params: {accion: accion_send},
            url: host + "php/citas/citas.php", //php
            success: function(form, action) {
                console.log(action.result);

                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }
                //TODO//
                
                Ext.getCmp("x_codigoCitaDeportiva").setValue(action.result.newId);
                Ext.MessageBox.alert('Proceso', action.result.msg);
                //Actualizar la grilla de valores
                Ext.getCmp("x_grid_roles").getStore().load();
            },
            failure: function(form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
    },
    nuevaCita: function() {
        //llama el formulario
        var formulario = Ext.getCmp("x_formularioCitaDeportiva");
        formulario.getForm().reset();
        Ext.getCmp("x_tituloCita").focus();
    },
    eliminarCitas: function() {
        //llama el formulario
        var formulario = Ext.getCmp("x_formulario");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        var accion_send = "ELIMINAR";
        Ext.MessageBox.confirm('Advertencia', 'Esta  seguro de eliminar el registro?', function(btn) {
            if (btn === 'yes') {
                formulario.getForm().submit({
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

            }

        });
    },
    cargarDatosAformulario: function(grid, record) {
        //llama el formulario
        var formulario = Ext.getCmp("x_formulario");

        formulario.getForm().setValues(record.data);
    }
});