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
                    url: host + "php/citas/agendamiento.php",
                    extraParams: {"accion": "CONSULTARAGENDADOS"},
                    pageSize : 20,
                    reader: {
                        type: "json",
                        root: "agendados",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: false
            },cfg)]);
    }
});
        