Ext.define("EscuelaFutbol.store.Ciudades", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.Ciudades'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.Ciudades",
                proxy: {
                    type: 'ajax',
                    url: host + "php/maestras/Ciudades.php",
                    extraParams: {"accion": "CONSULTARCIUDADES"},
                    reader: {
                        type: "json",
                        root: "ciudades",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        

