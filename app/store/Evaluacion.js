Ext.define('EscuelaFutbol.store.Evaluacion', {
    extend: 'Ext.data.TreeStore',
    requires : ['EscuelaFutbol.model.Evaluacion'],
    constructor: function(cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Evaluacion',
            expanded: true,
            model: 'EscuelaFutbol.model.Evaluacion',
            proxy: {
                    type: 'ajax',
                    url: host + "php/evaluacion/evaluacion.php",
                    extraParams: {"accion": "CONSULTAREVALUACION"},
                    reader: {
                        type: "json",
                        root: "preguntas",
                    }
                },
                autoLoad: false
        }, cfg)]);
    }
});

Ext.define('EscuelaFutbol.store.Evaluacion', {
	extend : 'Ext.data.TreeStore'
    });
    
