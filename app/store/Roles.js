Ext.define("EscuelaFutbol.store.Roles", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.Roles'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.Roles",
                proxy: {
                    type: 'ajax',
                    url: host + "php/seguridad/roles.php",
                    extraParams: {"accion": "CONSULTAR"},
                    reader: {
                        type: "json",
                        root: "roles",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        