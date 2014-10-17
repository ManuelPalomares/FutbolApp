Ext.define("EscuelaFutbol.store.Categorias", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.Categorias'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.Categorias",
                proxy: {
                    type: 'ajax',
                    url: host + "php/maestras/Categorias.php",
                    extraParams: {"accion": "CONSULTARCATEGORIAS"},
                    reader: {
                        type: "json",
                        root: "categorias",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        



