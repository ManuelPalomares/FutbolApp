Ext.define("EscuelaFutbol.store.Cobros", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.Cobros'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.Cobros",
                proxy: {
                    type: 'ajax',
                    url: host + "php/gestionDeportiva/cobros.php",
                    extraParams: {"accion": "CONSULTARCOBROS"},
                    reader: {
                        type: "json",
                        root: "cobros",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        