Ext.define('EscuelaFutbol.model.Usuarios', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'codigo'
        },
        {
            name: 'nombre'
        }
    ]
});