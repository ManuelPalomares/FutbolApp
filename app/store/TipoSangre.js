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
                    codigo: 'O+',
                    descripcion: 'O +'
                },
                {
                    codigo: 'O-',
                    descripcion: 'O -'
                },
                {
                    codigo: 'A+',
                    descripcion: 'A +'
                },
                {
                    codigo: 'A-',
                    descripcion: 'A -'
                },
                {
                    codigo: 'B+',
                    descripcion: 'B +'
                },
                {
                    codigo: 'B-',
                    descripcion: 'B -'
                },
                {
                    codigo: 'AB+',
                    descripcion: 'A B +'
                },
                {
                    codigo: 'AB-',
                    descripcion: 'A B -'
                }
            ]
        }, cfg)]);
    }
});