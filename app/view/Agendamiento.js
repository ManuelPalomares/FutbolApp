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
    height: 560,
    width: 1100,
    bodyPadding: 10,
    title: '',
    id: 'x_agendamientoDeportivo',
    layout : {type: 'column',padding:"0,5em"},
    items: [
        {
            xtype: 'numberfield',
            id: 'x_codigo_citaseleccionada',
            hidden: true
        },
        {
            xtype: 'gridpanel',
            height: 450,
            width: 500,
            title: 'Eventos Deportivos',
            store: 'EscuelaFutbol.store.Eventos',
            id: 'x_grillaAgenEventos',
            collapsible: true,
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
                    width: 100,
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
                    store: 'EscuelaFutbol.store.Eventos'

                }
            ]
        },
        {
            xtype: 'fieldset',
            height: 80,
            width: 500,
            layout: 'column',
            title: 'Agendamiento del evento por jugador o categoria',
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
                            width: 400,
                            fieldLabel: 'Nombre Jugador',
                            displayField: 'nombres',
                            //tpl : '<div><img src="'+Ext.create("EscuelaFutbol.controller.HostServer").getHost()+"files/fotosjugadores/"+'{foto}"></img></div><div>{nombres} {apellidos}</div>',
                            tpl: Ext.create('Ext.XTemplate', '<tpl for="."><div class="x-boundlist-item"><img width="100px" height="100px" src="' + Ext.create("EscuelaFutbol.controller.HostServer").getHost() + "files/fotosjugadores/" + '{foto}"></img>{nombres} {apellidos}</div></tpl>'),
                            valueField: 'codigo',
                            queryMode: 'remote',
                            id: 'x_jugador_agenda',
                            store: Ext.create('EscuelaFutbol.store.Jugadores')
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar',
                            tipo: 'J',
                            cls: 'x_btnAgregar'
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
                            width: 400,
                            fieldLabel: 'Categoria',
                            displayField: 'descripcion',
                            valueField: 'codigo',
                            queryMode: 'local',
                            id: 'x_categoria_agenda',
                            store: Ext.create('EscuelaFutbol.store.Categorias')
                        },
                        {
                            xtype: 'button',
                            text: 'Agendar',
                            tipo: 'C',
                            cls: 'x_btnAgregar'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            title: 'Agendados',
            width: 500,
            height : 360,
            store: 'EscuelaFutbol.store.AgendadosEventos',
            id: 'x_gridAgendados',
            
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'nombres',
                    text: 'Nombres'
                },
                {
                    xtype: 'gridcolumn',
                    width: 136,
                    dataIndex: 'email',
                    text: 'Email'
                }, {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'categoria',
                    text: 'Categoria'
                }
            ],
            tbar : [
                {
                    id : 'x_eliminardelaAgenda',
                    text : " ", 
                    icon:"resources/img/btns/eliminar2.png", 
                    iconCls : "x_iconosBotonesForma",
                    iconAlign: "center",
                     width: 40,
                    height: 40,
                }
            ],
            dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: 'EscuelaFutbol.store.AgendadosEventos', // same store GridPanel is using
                    dock: 'bottom',
                    displayInfo: false

                }]
        }
    ],
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                    xtype: "button",
                    text: "Enviar Mail",
                    icon: "resources/img/btns/mail.png",
                    width: 50,
                    height: 50,
                    style: {margin: '0.2em'},
                    iconCls: "x_iconosBotonesForma",
                    iconAlign: "center",
                    id: "x_enviarCitaDeportivaEmailAgendados"
                }]
        }]

});
