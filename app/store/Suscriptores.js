Ext.define("EscuelaFutbol.store.Suscriptores", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.Suscriptores'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.Suscriptores",
                proxy: {
                    type: 'ajax',
                    url: host + "php/maestras/Suscriptores.php",
                    extraParams: {"accion": "CONSULTARSUSCRIPTORES"},
                    reader: {
                        type: "json",
                        root: "suscriptores",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        

