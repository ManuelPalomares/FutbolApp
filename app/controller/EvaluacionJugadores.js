Ext.define('EscuelaFutbol.controller.EvaluacionJugadores', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*','Ext.tree.*'],
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
                    store : 'EscuelaFutbol.store.Evaluacion',
                    columns: [
                        {
                            xtype: 'treecolumn',
                            width: '60%',
                            dataIndex: 'descripcion_detalle',
                            text: 'Aspecto personal'
                        },
                        {
                            xtype: 'booleancolumn',
                            dataIndex: 'respuestasino',
                            width: '20%',
                            text: 'Respuesta Si/NO'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'respuestatexto',
                            width: '20%',
                            editor :{
                                allowBlank:true
                            },
                            text: 'Respuesta Texto'
                        }
                    ]
                }]
        });
        
        wind.show();

    }
});
