Ext.define('EscuelaFutbol.model.AgendadosEventos', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.Field'
    ],
    fields: [
        {name: 'evento'},
        {name: 'suscriptor'},
        {name: 'jugador'},
        {name: 'codigo_jugador'},
        {name: 'codigo_suscriptor'}]
});