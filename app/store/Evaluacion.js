Ext.define('EscuelaFutbol.store.Evaluacion', {
    extend: 'Ext.data.TreeStore',
    requires: ['EscuelaFutbol.model.Evaluacion',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*'
    ],
    constructor: function (cfg) {
        var me = this;
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        cfg = cfg || {};
        me.callParent([Ext.apply({
                storeId: 'Evaluacion',
                model: 'EscuelaFutbol.model.Evaluacion',
                proxy: {
                    type: 'ajax',
                    url: host + "php/evaluacion/evaluacion.php",
                    extraParams: {"accion": "CONSULTAREVALUACION"},
                    reader: {
                        type: 'json',
                        root: 'data'
                    }
                },
                folderSort: true,
                root: {
                    text: 'Aspectos a Evaluar',
                    id: '-1',
                    expanded: true
                },
                autoLoad: false
            }, cfg)]);
    }
});