Ext.define('EscuelaFutbol.store.TipoSangre', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.TipoSangre',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.TipoSangre',
            storeId: 'TipoSangre',
            data: [
                {
                    codigo: '1',
                    descripcion: 'O+'
                },
                {
                    codigo: '2',
                    descripcion: 'O-'
                },
                {
                    codigo: '3',
                    descripcion: 'A+'
                },
                {
                    codigo: '4',
                    descripcion: 'A-'
                },
                {
                    codigo: '5',
                    descripcion: 'B+'
                },
                {
                    codigo: '6',
                    descripcion: 'B-'
                },
                {
                    codigo: '7',
                    descripcion: 'AB+'
                },
                {
                    codigo: '8',
                    descripcion: 'AB-'
                }
            ]
        }, cfg)]);
    }
});