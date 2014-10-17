Ext.define('EscuelaFutbol.store.Parentesco', {
    extend: 'Ext.data.Store',

    requires: [
        'EscuelaFutbol.model.Parentesco',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'EscuelaFutbol.model.Parentesco',
            storeId: 'Parentesco',
            data: [
                {
                    codigo: 'P',
                    descripcion: 'Padre'
                },
                {
                    codigo: 'M',
                    descripcion: 'Madre'
                },
                {
                    codigo: 'T',
                    descripcion: 'Tio(a)'
                },
                {
                    codigo: 'A',
                    descripcion: 'Abuelo(a)'
                },
                {
                    codigo: 'O',
                    descripcion: 'Otro'
                }
            ]
           }, cfg)]);
    }
});