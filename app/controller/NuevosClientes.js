Ext.define('EscuelaFutbol.controller.NuevosClientes', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*'],
    init: function () {
        this.control({
            '#x_guardarNuevoCliente': {
                click: this.guardarNuevosClientes
            },
            '#x_NuevoCliente': {
                click: this.nuevoCliente
            },
            '#x_fecha_nacimiento': {
                change: this.calculaEdad
            }
        });
    },
    guardarNuevosClientes: function () {
        //llama el formulario
        var formularioSuscriptores = Ext.getCmp("x_formularioNuevosClientes");
        //se llama el host 
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //submit y la configuracion y se programa la respuesta
        var accion_send = "GUARDAR";
        //si el codigo del campono es nulo actualiza el dato
        if (Ext.getCmp("x_codigoJugador").getValue() !== null) {
            accion_send = "ACTUALIZAR";
        }

        //envio de los datos digitados al servidor
        formularioSuscriptores.getForm().submit({
            clientValidation: true,
            waitMsg: "Guardando los datos",
            params: {accion: accion_send},
            url: host + "php/gestionDeportiva/nuevosClientes.php",
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
    nuevoCliente: function () {
        //llama el formulario
        var formularioSuscriptores = Ext.getCmp("x_formularioNuevosClientes");
        //resetear el formulario 
        formularioSuscriptores.getForm().reset();
        Ext.getCmp("x_codigoNombreJugador").focus();
    },
    calculaEdad: function (fechaNac) {
        var fecha = fechaNac.getValue();
        var edad = Ext.getCmp("x_edad");
        fecha.getYear();
        edad.setValue(this.calcular_edad(fecha.getDate(),fecha.getMonth(),fecha.getYear()));
        
    },
    calcular_edad: function (dia_nacim, mes_nacim, anio_nacim) {
        var fecha_hoy = new Date();
        var ahora_anio = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth();
        var ahora_dia = fecha_hoy.getDate();
        var edad = (ahora_anio + 1900) - anio_nacim;
        
        if (ahora_mes < (mes_nacim - 1)) {
            edad--;
        }
        if (((mes_nacim - 1) == ahora_mes) && (ahora_dia < dia_nacim))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }
        if(edad == 1900)
            edad =0;
        
        return edad;
    },
    

});