Ext.define('EscuelaFutbol.store.Genero', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Genero',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.Genero',
            storeId: 'genero',
            data: [
                {
                    codigo: 'M',
                    descripcion: 'Masculino'
                },
                {
                    codigo: 'F',
                    descripcion: 'Femenino'
                }
            ]
        }, cfg)]);
    }
});