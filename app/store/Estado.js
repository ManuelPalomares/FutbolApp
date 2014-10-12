Ext.define('EscuelaFutbol.store.Estado', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Estado',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.Estado',
            storeId: 'estado',
            data: [
                {
                    codigo: 'A',
                    descripcion: 'Activo'
                },
                {
                    codigo: 'I',
                    descripcion: 'Inactivo'
                },
                {
                    codigo: 'P',
                    descripcion: 'Prueba Deportiva'
                }
            ]
        }, cfg)]);
    }
});