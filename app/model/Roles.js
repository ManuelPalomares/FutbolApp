Ext.define('EscuelaFutbol.model.Roles', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'CODIGO'
        },
        {
            name: 'DESCRIPCION'
        }
    ]
});