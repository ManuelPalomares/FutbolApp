Ext.define('EscuelaFutbol.model.Evaluacion', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.NodeInterface'
    ],
    getRefItems: function () {
        return this.childNodes;
    },
    getRefOwner: function () {
        return this.parentNode;
    },
    fields: [
        {
            name: 'codigo'
        },
        {
            name: 'codigo_padre'
        },
        {
            name: 'descripcion_detalle'
        },
        {
            name: 'tipo'
        },
        {
            name: 'respuesta_aspecto'
        },
        {
            name: 'respuesta_si_no'
        },
        {
            name: 'respuesta_texto'
        }

    ]
});