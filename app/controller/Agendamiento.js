Ext.define('EscuelaFutbol.controller.Agendamiento', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*', 'Ext.form.field.HtmlEditor'],
    init: function() {
        this.control({
            '#x_agendamientoDeportivo': {
                render: this.recargarGrillaEventos
            },
            'button[cls=x_btnAgregar]':{
                click : this.agregarAlEvento
            }
        });
    },
 
    recargarGrillaEventos: function(){
        Ext.getCmp("x_grillaAgenEventos").getStore().load();
    },
    agregarAlEvento : function(btn){
        
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        
        var codigoAgregar ="";
        
        if(btn.tipo === 'J'){
            codigoAgregar = Ext.getCmp("x_jugador_agenda").getValue();
        }
        if(btn.tipo === 'C'){
            codigoAgregar = Ext.getCmp("x_categoria_agenda").getValue();
        }
        
        if(btn.tipo === 'S'){
            codigoAgregar = Ext.getCmp("x_suscriptor_agenda").getValue();
        }
        
        
        Ext.Ajax.request({
            url: host + "php/citas/agendamiento.php",
            params: {
                accion: "AGENDARCITA",
                tipoAgenda: btn.tipo,
                codigoAgregar : codigoAgregar
            },
            success: function(response) {
                var respuesta = Ext.decode(response.responseText);
                
            },
            failure: function(response) {
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }

        });

    }
});