Ext.define('EscuelaFutbol.store.Implementos', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Implementos'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.Implementos',
            storeId: 'MyStore1',
            data: [
                {
                    codigo: '01',
                    nombre: 'Guallos'
                },
                {
                    codigo: '02',
                    nombre: 'Canilleras'
                }
            ]
        }, cfg)]);
    }
});