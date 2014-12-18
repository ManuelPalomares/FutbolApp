Ext.define('EscuelaFutbol.model.Evaluacion', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'codigo'
        },
        {
            name: 'descripcion_detalle'
        },
        {
            name: 'tipo'
        },
        {
            name: 'codigo_detalle_aspecto'
        },
        {
            name : 'calificacion'
        },
        {
            name : 'respuestasino'
        },
        {
            name : 'respuestatexto'
        }
    ]
});