Ext.define('EscuelaFutbol.store.EntrenadoresGrilla', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.EntrenadoresGrilla'
    ],

    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Jugadores',
            model: 'EscuelaFutbol.model.EntrenadoresGrilla',
            pageSize : 15,
            proxy: {
                    type: 'ajax',
                    url: host + "php/maestras/FichaEntrenadores.php",
                    extraParams: {"accion": "CONSULTARENTRENADORESGRILLA"},
                    reader: {
                        type: "json",
                        root: "entrenadores",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: false
        }, cfg)]);
    }
});