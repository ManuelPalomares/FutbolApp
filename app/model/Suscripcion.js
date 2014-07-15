Ext.define('EscuelaFutbol.model.Suscripcion', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'nombre'
        },
        {
            name: 'telefono'
        }
    ]
});