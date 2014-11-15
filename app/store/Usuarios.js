Ext.define('EscuelaFutbol.store.Usuarios', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Usuarios',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    constructor: function(cfg) {
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.Usuarios',
            storeId: 'Usuarios',
            proxy: {
                    type: 'ajax',
                    url: host + "php/maestras/Usuarios.php",
                    extraParams: {"accion": "CONSULTARUSUARIOS"},
                    reader: {
                        type: "json",
                        root: "usuarios",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
        }, cfg)]);
    }
});