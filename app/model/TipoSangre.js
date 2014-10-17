Ext.define('EscuelaFutbol.model.TipoSangre', {
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