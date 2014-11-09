Ext.define('EscuelaFutbol.view.Agendamiento', {
    extend: 'Ext.form.Panel',
    alias: 'widget.agendamiento',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Date',
        'Ext.toolbar.Paging',
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'agendamiento'
    },
    height: 700,
    width: 674,
    bodyPadding: 10,
    title: '',
    id : 'x_agendamientoDeportivo',
    items: [
        {
            xtype: 'gridpanel',
            height: 250,
            title: 'Eventos Deportivos',
            store : 'EscuelaFutbol.store.Eventos',
            id    : 'x_grillaAgenEventos',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'string',
                    text: 'Titulo del Evento',
                    dataIndex: 'titulo_evento'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'date',
                    text: 'Fecha inicio',
                    dataIndex : 'fecha_inicio'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'date',
                    text: 'Fecha Fin Evento',
                    dataIndex: 'fecha_fin'
                },
                {
                    xtype: 'gridcolumn',
                    width: 137,
                    dataIndex: 'string',
                    text: 'Estado del evento',
                    dataIndex : 'estado_evento'
                    
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    store : 'EscuelaFutbol.store.Eventos'
                    
                }
            ]
        },
        {
            xtype: 'fieldset',
            height: 110,
            layout: 'column',
            title: 'Agendamiento del evento',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            width: 400,
                            fieldLabel: 'Suscriptor'
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            width: 400,
                            fieldLabel: 'Nombre Jugador'
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            width: 400,
                            fieldLabel: 'Categoria'
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            title: 'Agendados',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 255,
                    dataIndex: 'string',
                    text: 'Nombre'
                },
                {
                    xtype: 'gridcolumn',
                    width: 136,
                    dataIndex: 'string',
                    text: 'Categoria'
                }
            ]
        }
    ]

});
