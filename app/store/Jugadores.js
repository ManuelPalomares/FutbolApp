Ext.define('EscuelaFutbol.store.Jugadores', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Jugadores'
    ],

    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Jugadores',
            model: 'EscuelaFutbol.model.Jugadores',
            proxy: {
                    type: 'ajax',
                    url: host + "php/gestionDeportiva/FichaInscripcion.php",
                    extraParams: {"accion": "CONSULTAR"},
                    reader: {
                        type: "json",
                        root: "jugadores",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
        }, cfg)]);
    }
});