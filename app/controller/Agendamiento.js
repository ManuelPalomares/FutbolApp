Ext.define('EscuelaFutbol.controller.Agendamiento', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.*', 'Ext.form.field.HtmlEditor'],
    init: function() {
        this.control({
            '#x_agendamientoDeportivo': {
                render: this.recargarGrillaEventos
            }
        });
    },
 
    recargarGrillaEventos: function(){
        Ext.getCmp("x_grillaAgenEventos").getStore().load();
    }
});