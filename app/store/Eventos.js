Ext.define('EscuelaFutbol.store.Eventos', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Eventos'
    ],

    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Eventos',
            model: 'EscuelaFutbol.model.Eventos',
            pageSize : 10,
            proxy: {
                    type: 'ajax',
                    url: host + "php/citas/citas.php",
                    extraParams: {"accion": "CONSULTAR"},
                    reader: {
                        type: "json",
                        root: "citas",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: false
        }, cfg)]);
    }
});