Ext.define('EscuelaFutbol.store.EstadosEventos', {
    extend: 'Ext.data.Store',
    requires: [
        'EscuelaFutbol.model.EstadosEventos',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
                storeId: 'EstadosEventos',
                model: 'EscuelaFutbol.model.EstadosEventos',
                data: [
                    {
                        codigo: 'A',
                        descripcion: 'Activo'
                    },
                    {
                        codigo: 'C',
                        descripcion: 'Cancelado'
                    }
                ]
            }, cfg)]);
    }
});