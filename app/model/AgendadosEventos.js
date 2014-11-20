Ext.define('EscuelaFutbol.model.AgendadosEventos', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.Field'
    ],
    fields: [
        {name: 'evento'},
        {name: 'email'},
        {name: 'nombres'},
        {name: 'tipo'},
        {name: 'jugador'},
        {name: 'categoria'}]
});