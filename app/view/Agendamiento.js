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
            height: 100,
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
                            xtype: 'combobox',
                            width: 550,
                            fieldLabel: 'Suscriptor',
                            displayField: 'nombrescompletos',
                            valueField: 'codigo',
                            queryMode: 'remote',
                            id : 'x_suscriptor_agenda',
                            store: Ext.create('EscuelaFutbol.store.Suscriptores')
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar',
                            tipo: 'S',
                            cls:'x_btnAgregar'
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
                            xtype: 'combobox',
                            width: 550,
                            fieldLabel: 'Nombre Jugador',
                            displayField: 'nombres',
                            //tpl : '<div><img src="'+Ext.create("EscuelaFutbol.controller.HostServer").getHost()+"files/fotosjugadores/"+'{foto}"></img></div><div>{nombres} {apellidos}</div>',
                            tpl : Ext.create('Ext.XTemplate','<tpl for="."><div class="x-boundlist-item"><img width="100px" height="100px" src="'+Ext.create("EscuelaFutbol.controller.HostServer").getHost()+"files/fotosjugadores/"+'{foto}"></img>{nombres} {apellidos}</div></tpl>'),
                            valueField: 'codigo',
                            queryMode: 'remote',
                            id : 'x_jugador_agenda',
                            store: Ext.create('EscuelaFutbol.store.Jugadores')
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar',
                            tipo: 'J',
                            cls:'x_btnAgregar'
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
                            xtype: 'combobox',
                            width: 550,
                            fieldLabel: 'Categoria',
                            displayField: 'descripcion',
                            valueField: 'codigo',
                            queryMode: 'local',
                            id : 'x_categoria_agenda',
                            store: Ext.create('EscuelaFutbol.store.Categorias')
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar',
                            tipo: 'C',
                            cls:'x_btnAgregar'
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
