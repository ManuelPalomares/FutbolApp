Ext.define('EscuelaFutbol.controller.Agendamiento', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*', 'Ext.form.field.HtmlEditor'],
    init: function () {
        this.control({
            '#x_agendamientoDeportivo': {
                render: this.recargarGrillaEventos
            },
            'button[cls=x_btnAgregar]': {
                click: this.agregarAlEvento
            },
            '#x_grillaAgenEventos': {
                itemclick: this.recargarGrillaAgendados
            },
            '#x_gridAgendados': {
                itemclick: this.seleccionarJugadorEvento
            },
            '#x_eliminardelaAgenda': {
                click: this.eliminardeAgenda
            },
            '#x_enviarCitaDeportivaEmailAgendados': {
                click: this.enviarMailCita
            }
        });
    },
    recargarGrillaEventos: function () {
        Ext.getCmp("x_grillaAgenEventos").getStore().load();
    },
    agregarAlEvento: function (btn) {

        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();

        var codigoAgregar = "";

        if (btn.tipo === 'J') {
            codigoAgregar = Ext.getCmp("x_jugador_agenda").getValue();
        }
        if (btn.tipo === 'C') {
            codigoAgregar = Ext.getCmp("x_categoria_agenda").getValue();
        }

        var codigo = Ext.getCmp("x_codigo_citaseleccionada").getValue();

        //validar null

        if (codigoAgregar == null) {
            Ext.Msg.alert('Mensaje error', "No se puede agendar sin seleccionar el jugador");
            return;
        }
        if (codigo == null) {
            Ext.Msg.alert('Mensaje error', "No se puede agendar sin seleccionar  el evento");
            return;
        }


        Ext.Ajax.request({
            url: host + "php/citas/agendamiento.php",
            params: {
                accion: "AGENDARCITA",
                tipoAgenda: btn.tipo,
                codigoAgregar: codigoAgregar,
                codigo_cita: Ext.getCmp("x_codigo_citaseleccionada").getValue()
            },
            success: function (response) {
                var respuesta = Ext.decode(response.responseText);
                if (respuesta.mensaje_error !== undefined) {
                    Ext.Msg.alert('Mensaje', respuesta.mensaje_error);
                    return;
                }

                if (respuesta.msg !== undefined) {
                    Ext.Msg.alert('Mensaje', respuesta.msg);
                    Ext.getCmp("x_gridAgendados").getStore().load();
                    return;
                }

            },
            failure: function (response) {
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }

        });

    },
    recargarGrillaAgendados: function (grid, record) {
        //define el codigo cita para agendar
        Ext.getCmp("x_codigo_citaseleccionada").setValue(record.data.codigo);

        var grilla = Ext.getCmp("x_gridAgendados");

        grilla.getStore().getProxy().setExtraParam('codigo_cita', record.data.codigo);
        grilla.getStore().load();
    },
    seleccionarJugadorEvento: function (grid, record) {

        Ext.getCmp("x_codigo_jugadorSeleccionado").setValue(record.data.jugador);

    },
    eliminardeAgenda: function () {
        var jugador = Ext.getCmp("x_codigo_jugadorSeleccionado").getValue();
        var cita = Ext.getCmp("x_codigo_citaseleccionada").getValue();
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();

        Ext.Msg.confirm("Advertencia", "Desea eliminar el judador de la agenda?", function (b) {
            if (b == "no")
                return;

            Ext.Ajax.request({
                url: host + "php/citas/agendamiento.php",
                params: {
                    accion: "ELIMINARAGENDA",
                    codigo_cita: cita,
                    jugadorEliminar: jugador
                },
                success: function (response) {
                    var respuesta = Ext.decode(response.responseText);
                    if (respuesta.mensaje_error !== undefined) {
                        Ext.Msg.alert('Mensaje', respuesta.mensaje_error);
                        return;
                    }

                    if (respuesta.msg !== undefined) {
                        Ext.Msg.alert('Mensaje', respuesta.msg);
                        Ext.getCmp("x_gridAgendados").getStore().load();
                        return;
                    }

                },
                failure: function (response) {
                    alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
                }

            });
        });


    },
    enviarMailCita: function () {
        var cita = Ext.getCmp("x_codigo_citaseleccionada").getValue();
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        Ext.Ajax.request({
            url: host + "php/citas/agendamiento.php",
            params: {
                accion: "ENVIARMAILCITA",
                codigo_cita: cita
            },
            success: function (response) {
                var respuesta = Ext.decode(response.responseText);
                if (respuesta.mensaje_error !== undefined) {
                    Ext.Msg.alert('Mensaje', respuesta.mensaje_error);
                    return;
                }

                if (respuesta.msg !== undefined) {
                    Ext.Msg.alert('Mensaje', respuesta.msg);
                    return;
                }

            },
            failure: function (response) {
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }

        });
    }

});