Ext.define('EscuelaFutbol.model.Eventos', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'codigo'
        },
        {
            name: 'titulo_evento'
        },
        {
            name: 'fecha_inicio'
        },
        {
            name: 'fecha_fin'
        },
        {
            name: 'descripcion_evento'
        },
        {
            name: 'estado_evento'
        }
    ]
});