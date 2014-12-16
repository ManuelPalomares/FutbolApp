Ext.define('EscuelaFutbol.controller.EvaluacionJugadores', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*','Ext.tree.*',],
    init: function () {
        this.control({
            '#x_jugador_evaluacion': {
                change: this.seleccionarJugador
            },
            '#x_realizarEvaluacion': {
                click: this.abrirVentanaEvaluacion
            }

        });
    },
    seleccionarJugador: function (combo) {
        var store = combo.getStore();
        var jugador = combo.getValue();
        var registro = store.findRecord('codigo', jugador).getData();
        var NuevosClientes = Ext.create("EscuelaFutbol.controller.NuevosClientes");
        var fecha_nacimiento = new Date(registro.fecha_nacimiento);

        var edad = Ext.getCmp("x_edadJugadorEvaluacion");

        Ext.getCmp("x_formaEvaluacionJugadores").getForm().setValues(registro);

        //calcula la edad
        edad.setValue(NuevosClientes.calcular_edad(fecha_nacimiento.getDate(), fecha_nacimiento.getMonth(), fecha_nacimiento.getYear()));
    },
    abrirVentanaEvaluacion: function () {
        var wind = Ext.create("Ext.window.Window", {
            width: 900,
            height: 600,
            maximized : true,
            id    : 'x_ventanaEvaluacion',
            title: 'Evaluacion y cuestionario',
            items: [{
                    xtype: 'gridpanel',
                    title: 'Evaluacion',
                    height : 550,
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: '80%',
                            dataIndex: 'string',
                            text: 'Aspecto personal'
                        },
                        {
                            xtype: 'booleancolumn',
                            dataIndex: 'bool',
                            width: '20%',
                            text: 'Boolean'
                        }
                    ]
                }]
        });
        
        wind.show();

    }
});
