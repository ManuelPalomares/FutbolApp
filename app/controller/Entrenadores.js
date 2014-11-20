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
            '#x_comboCategoria': {
                change: this.cargarStoreCategoria
            },
            '#x_subirfotoEntrenador': {
                click: this.abrirformaCargueImagen
            },
            '#x_subirFotoServidor': {
                click: this.subirFotoServidor
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
        if (Ext.getCmp("x_codigoEntrenador").getValue() !== null) {
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
                Ext.getCmp("x_codigoEntrenador").setValue(action.result.newId);
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
        Ext.getCmp("x_fotoEntrenador").setSrc("resources/img/foto_jugadores.png");
    },
    cargarDatosAformularioEntrenador: function (grid, record) {
        //llama el formulario
        var formularioEntrenadores = Ext.getCmp("x_formularioEntrenadores");

        formularioEntrenadores.getForm().setValues(record.data);
        //carga foto de store
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        if(record.data.foto !=="")
        Ext.getCmp("x_fotoEntrenador").setSrc(host+"files/fotosjugadores/"+record.data.foto);
        
        console.log(record.data);
        
    },
    cargarStoreCategoria: function (combo) {
        //toma la grilla de datos y la recarga con el nuevo parametro de CATEGORIA seleccionada. 
        Ext.getCmp("x_grillaEntrenadores").getStore().getProxy().setExtraParam('categoria', combo.getValue());
        //recarga la grilla y el store como se cambio en setExtraParam 
        Ext.getCmp("x_grillaEntrenadores").getStore().load();

    },
    abrirformaCargueImagen: function (btn) {
        var winImg = Ext.create('Ext.window.Window', {
            width: 400,
            height: 150,
            title: "Cargue fotografia del entrenador",
            modal: true,
            closable: true,
            maximized: false,
            
            items: [{
                    xtype: 'form',
                    fileUpload: true,
                    id: 'x_formaCargueFormularioFotoEntrenador',
                    items: [{
                            xtype: 'filefield',
                            fieldLabel: 'Imagen de entrenador',
                            name : 'imagenEntrenador',
                            allowBlank: false,
                        }]
                }],
            buttons: [{text: 'Subir foto', id: 'x_subirFotoServidor'}, {text: 'Cerrar', handler: function () {
                        winImg.close();
                    }}]
        });
        winImg.show();

    },
    subirFotoServidor: function (btn) {
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //llama el formulario
        var formularioCargueFoto = Ext.getCmp("x_formaCargueFormularioFoto");
        var accion_send = 'CARGARFOTO';
        formularioCargueFoto.submit({
            clientValidation: true,
            frame : true,
            waitMsg: "Subiendo el archivo al servidor",
            url: host + "php/maestras/FichaEntrenadores.php",
            params: {accion: accion_send},
            success: function (form, action) {
                //mostrar mensaje
                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }
                
                //mensaje que cuardo con exito
                Ext.MessageBox.alert('Proceso', action.result.msg);
                
                //asigna la ruta de la foto
                if(action.result.foto !==""){
                    var foto = Ext.getCmp("x_fotoJugador");
                    foto.setSrc(host+"files/fotosjugadores/"+action.result.foto);
                    Ext.getCmp("x_fotoJugadorCampo").setValue(action.result.foto);
                }
                    
            },
            failure: function (form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
    }
});



