Ext.define('EscuelaFutbol.controller.Jugadores', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*'],
    init: function () {
        this.control({
            '#x_guardarJugador': {
                click: this.guardarJugador
            },
            '#x_nuevoJugador': {
                click: this.nuevoJugador
            },
            '#x_grillaJugadores': {
                itemclick: this.cargarDatosAformulario
            }

        });
    },
    guardarJugador: function () {
        //llama el formulario
        var formularioJugadores = Ext.getCmp("x_formularioJugadores");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //submit y la configuracion y se programa la respuesta
        var accion_send = "GUARDAR";

        //si el codigo del campo no es nulo actualiza el dato
        if (Ext.getCmp("x_codigoJugador").getValue() !== null) {
            accion_send = "ACTUALIZAR";
        }

        //envio de los datos digitados al servidor
        formularioJugadores.getForm().submit({
            clientValidation: true,
            waitMsg: "Guardando los datos",
            params: {accion: accion_send},
            url: host + "php/gestionDeportiva/FichaInscripcion.php",
            success: function (form, action) {
                console.log(action.result);
                //mostrar mensaje
                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }
                //retorna el id que se almaceno para el dato de la llave primaria 
                Ext.getCmp("x_codigoJugador").setValue(action.result.newId);
                //mensaje que cuardo con exito
                Ext.MessageBox.alert('Proceso', action.result.msg);

                //recargar la grilla de datos 
                //Ext.getCmp("x_grid_suscriptores").getStore().load();
            },
            failure: function (form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
    },
    nuevoJugador: function () {
        //llama el formulario
        var formularioJugadores = Ext.getCmp("x_formularioJugadores");
        //resetear el formulario 
        formularioJugadores.getForm().reset();
        Ext.getCmp("x_tipoDocumentoJugador").focus();
    },
    cargarDatosAformulario: function (grid, record) {
        //llama el formulario
        var formularioJugadores = Ext.getCmp("x_formularioJugadores");

        formularioJugadores.getForm().setValues(record.data);
    }
});

