Ext.define("EscuelaFutbol.store.AgendadosEventos", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.AgendadosEventos'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.AgendadosEventos",
                proxy: {
                    type: 'ajax',
                    url: host + "php/citas/citas.php",
                    extraParams: {"accion": "CONSULTAR"},
                    reader: {
                        type: "json",
                        root: "agendados",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        