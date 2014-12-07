Ext.define('EscuelaFutbol.store.TipoDocumento', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.TipoDocumento',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.TipoDocumento',
            storeId: 'TipoDocumento',
            data: [
                {
                    codigo: 'RC',
                    descripcion: 'R.C.'
                },
                {
                    codigo: 'TI',
                    descripcion: 'T.I.'
                },
                {
                    codigo: 'CC',
                    descripcion: 'C.C.'
                },                
                {
                    codigo: 'TE',
                    descripcion: 'T.E.'
                }
            ]
        }, cfg)]);
    }
});