Ext.define('EscuelaFutbol.model.Genero', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'codigo'
        },
        {
            name: 'descripcion'
        }
    ]
});