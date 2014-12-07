Ext.define('EscuelaFutbol.controller.Entrenadores', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*'],
    init: function () {
        this.control({
            '#x_guardarEntrenador': {
                click: this.guardarEntrenador
            },
            '#x_nuevoEntrenador': {
                click: this.nuevoEntrenador
            },
            '#x_grillaEntrenadores': {
                itemclick: this.cargarDatosAformularioEntrenador
            },
            '#x_comboCategoriaForma': {
                change: this.cargarStoreCategoria
            }


        });
    },
    guardarEntrenador: function () {
        //llama el formulario
        var formularioEntrenadores = Ext.getCmp("x_formularioEntrenadores");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //submit y la configuracion y se programa la respuesta
        var accion_send = "GUARDAR";

        //si el codigo del campo no es nulo actualiza el dato
        if (Ext.getCmp("x_codigoEntrenadorForma").getValue() !== null) {
            accion_send = "ACTUALIZAR";
        }

        //envio de los datos digitados al servidor
        formularioEntrenadores.getForm().submit({
            clientValidation: true,
            waitMsg: "Guardando los datos",
            params: {accion: accion_send},
            url: host + "php/maestras/FichaEntrenadores.php",
            success: function (form, action) {
                console.log(action.result);
                //mostrar mensaje
                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }
                //retorna el id que se almaceno para el dato de la llave primaria 
                Ext.getCmp("x_codigoEntrenadorForma").setValue(action.result.newId);
                //mensaje que cuardo con exito
                Ext.MessageBox.alert('Proceso', action.result.msg);

                //recargar la grilla de datos 
                Ext.getCmp("x_grillaEntrenadores").getStore().load();
            },
            failure: function (form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
    },
    nuevoEntrenador: function () {
        //llama el formulario
        var formularioEntrenadores = Ext.getCmp("x_formularioEntrenadores");
        //resetear el formulario 
        formularioEntrenadores.getForm().reset();
        Ext.getCmp("x_tipoDocumentoEntrenador").focus();
        //resetea imagen
        //Ext.getCmp("x_fotoEntrenador").setSrc("resources/img/foto_jugadores.png");
    },
    cargarDatosAformularioEntrenador: function (grid, record) {
        //llama el formulario
        var formularioEntrenadores = Ext.getCmp("x_formularioEntrenadores");

        formularioEntrenadores.getForm().setValues(record.data);
        
        
    },
    cargarStoreCategoria: function (combo) {
        //toma la grilla de datos y la recarga con el nuevo parametro de CATEGORIA seleccionada. 
        Ext.getCmp("x_grillaEntrenadores").getStore().getProxy().setExtraParam('categoria', combo.getValue());
        //recarga la grilla y el store como se cambio en setExtraParam 
        Ext.getCmp("x_grillaEntrenadores").getStore().load();

    //});
    }}
);
