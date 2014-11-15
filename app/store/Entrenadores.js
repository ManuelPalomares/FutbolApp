Ext.define("EscuelaFutbol.store.Entrenadores", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.Entrenadores'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.Entrenadores",
                proxy: {
                    type: 'ajax',
                    url: host + "php/maestras/Entrenadores.php",
                    extraParams: {"accion": "CONSULTARENTRENADORES"},
                    reader: {
                        type: "json",
                        root: "entrenadores",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        

