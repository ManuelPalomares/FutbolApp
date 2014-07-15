Ext.define('EscuelaFutbol.store.SuscripcionesNuevas', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Suscripcion'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.Suscripcion',
            storeId: 'Suscripcion',
            data: [
                {
                    nombre: 'manuel',
                    telefono: '123123213'
                },
                {
                    nombre: 'Juan',
                    telefono: '23232323'
                },
                {
                    nombre: 'Pedro',
                    telefono: '2323232321121'
                },
                {
                    nombre: 'Ale Salazar',
                    telefono: '233230011'
                }
            ]
        }, cfg)]);
    }
});