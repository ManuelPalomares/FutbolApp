Ext.define('EscuelaFutbol.store.Eventos', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Eventos'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Eventos',
            model: 'EscuelaFutbol.model.Eventos'
        }, cfg)]);
    }
});