Ext.define("EscuelaFutbol.store.ConceptosCobros", {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.ConceptosCobros'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: "EscuelaFutbol.model.ConceptosCobros",
                proxy: {
                    type: 'ajax',
                    url: host + "php/maestras/ConceptosCobros.php",
                    extraParams: {"accion": "CONSULTARCONCEPTOSCOBROS"},
                    reader: {
                        type: "json",
                        root: "ConceptosCobros",
                        totalProperty: "totalRows"
                    }
                },
                autoLoad: true
            },cfg)]);
    }
});
        




