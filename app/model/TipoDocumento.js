Ext.define('EscuelaFutbol.model.TipoDocumento', {
    extend: 'Ext.data.Model',

    alternateClassName: [
        'tipo_documento'
    ],
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