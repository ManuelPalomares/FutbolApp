Ext.define('EscuelaFutbol.model.Cobros', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.Field'
    ],
    fields: [{name: 'codigo'}, 
             {name: 'fecha_generacion'},
             {name: 'fecha_cobro'},
             {name: 'fecha_vigencia'},
             {name: 'fecha_pago'},
             {name: 'valor'},
             {name: 'codigo_concepto'},
             {name: 'desc_concepto'},
             {name: 'codigo_jugador'},
             {name: 'usuario_creacion'},
             {name: 'estado'}
            ]
});
