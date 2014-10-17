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
                    codigo: 'CC',
                    descripcion: 'Cédula de Ciudadanía'
                },
                {
                    codigo: 'TE',
                    descripcion: 'Tarjeta de Extranjería'
                },
                {
                    codigo: 'TI',
                    descripcion: 'Tarjeta de Identidad'
                },
                {
                    codigo: 'RC',
                    descripcion: 'Registro Civíl'
                }
            ]
        }, cfg)]);
    }
});