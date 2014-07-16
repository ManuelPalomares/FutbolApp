Ext.define('EscuelaFutbol.view.CitacionDeportiva', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.field.Date',
        'Ext.form.field.Time',
        'Ext.grid.Panel',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],
    alias : "widget.citacionDeportiva",
    width: 727,
    bodyPadding: 10,
    title: 'Citacion de prueba deportiva',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Fecha Citacion'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'timefield',
                            fieldLabel: 'Hora Citacion'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Profesor asignado',
                            queryMode: 'local'                            
                            /*store: '[{\r\n    "Jose Pekerman",\r\n    "Farid Mondragon",\r\n    "El pibe Valderrama"\r\n}]'*/
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    width: 400,
                    title: 'Implementos Deportivos',
                    store: 'EscuelaFutbol.store.Implementos',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 300,
                            dataIndex: 'nombre',
                            text: 'Implemento '
                        },
                        {
                            xtype: 'templatecolumn',
                            tpl: [
                                '<input type="checkbox">'
                            ],
                            text: 'Seleccionar'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    title: 'Convocados de la prueba deportiva',
                    store: 'EscuelaFutbol.store.SuscripcionesNuevas',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'nombre',
                            text: 'Nombre'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'telefono',
                            text: 'Telefono'
                        },
                        {
                            xtype: 'templatecolumn',
                            tpl: [
                                '<input type="checkbox" /> '
                            ],
                            text: 'Seleccionar'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Enviar Citacion'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});