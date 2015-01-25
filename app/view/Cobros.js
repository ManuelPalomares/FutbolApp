Ext.define('EscuelaFutbol.view.Cobros', {
    extend: 'Ext.form.Panel',
    alias: "widget.cobrosJugadores",
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View'
    ],

    height: 460,
    width: 720,
    bodyPadding: 10,
    title: 'Cobros',
    id: "x_formularioCobros",
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    height: 161,
                    width: 658,
                    layout: 'column',
                    title: 'Datos de cobro',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Nro de cobro',
                            name: 'codigo'
                        },
                        {
                            xtype: 'textfield',
                            width: 600,
                            fieldLabel: 'Jugador',
                            id: 'x_nombres_apellidos_jugador_cobro'
                        },
                        {
                            xtype: 'combobox',
                            width: 600,
                            fieldLabel: 'Concepto',
                            id: 'x_codigo_concepto',
                            name: 'codigo_concepto',
                            //store: 'EscuelaFutbol.store.ConceptosCobros',
                            valueField: 'codigo',
                            queryMode: 'local',
                            triggerAction: 'all',
                                            store: [
                                                ['1', 'Inscripcion'],
                                                ['2', 'Mensualidad'],
                                                ['3', 'Uniformes']
                                            ]
                        },
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Valor',
                            name: 'valor'
                        },
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Fecha elab',
                            name: 'fecha_generacion'
                        },
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Usuario elab',
                            name: 'usuario_creacion'
                        },
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Fecha vig',
                            name: 'fecha_vigencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    height: 37,
                    width: 660,
                    fieldLabel: '',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Nuevo Cobro',
                            id: "x_NuevoCobro"
                        },
                        {
                            xtype: 'button',
                            text: 'Guardar Cobro'
                        },
                        {
                            xtype: 'button',
                            text: 'Pagar Cobro'
                        },
                        {
                            xtype: 'button',
                            text: 'Imprimir Recibo Cobro'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    width: 661,
                    id   : "x_grid_cobros",
                    store:Ext.create("EscuelaFutbol.store.Cobros"),
                    title: 'Listado de Cobros por Jugador',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'codigo',
                            text: 'Nro de cobro'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'valor',
                            text: 'Valor'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'desc_concepto',
                            text: 'Concepto'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'fecha_pago',
                            text: 'Fecha Pago'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'estado',
                            text: 'Estado'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});

