Ext.define('EscuelaFutbol.controller.EvaluacionJugadores', {
    extend: 'Ext.app.Controller',
    requires: ['EscuelaFutbol.view.Evaluacion'],
    init: function () {
        this.control({
            '#x_jugador_evaluacion': {
                change: this.seleccionarJugador
            },
            '#x_realizarEvaluacion': {
                click: this.abrirVentanaEvaluacion
            },
            '#x_nuevaEvaluacion': {
                click : this.nuevaEvaluacion
            },
            '#x_guardarEvaluacion':{
                click : this.guardarEvaluacion
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
        
        if(Ext.getCmp("x_codigo_evaluacion").getValue() ==""){
            Ext.Msg.alert('Advertencia',"Debe crear la  evaluacion y luego evaluar");
            return false;
        }
        
        var wind2 = Ext.create("Ext.window.Window", {
            maximized : true,
            id    : 'x_ventanaEvaluacion',
            title: 'Evaluacion y cuestionario',
            items: [{
                    xtype : 'evaluacionX_preguntas',
                    width : '90%',
                    height : 600
            }]
        });
        
        wind2.show();
        
        // recargarGrilla
        var store = Ext.getCmp("x_grid_evaluacionPreguntas").getStore();
        store.load();
        
        

    },
    nuevaEvaluacion : function(){
        var forma =  Ext.getCmp("x_formaEvaluacionJugadores");
        forma.getForm().reset();   
        Ext.getCmp("x_jugador_evaluacion").focus();
    },
    guardarEvaluacion: function(){
        var forma =  Ext.getCmp("x_formaEvaluacionJugadores");
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        var accion_send = 'GUARDAREVALUACION';
            //envio de los datos digitados al servidor
        forma.getForm().submit({
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
                Ext.getCmp("x_codigo_evaluacion").setValue(action.result.newId);
                //mensaje que cuardo con exito
                Ext.MessageBox.alert('Proceso', action.result.msg);

            },
            failure: function (form, action) {
                //Se programa el evento fallido del servidor
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });
    }
});
