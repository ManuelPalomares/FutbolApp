Ext.define('EscuelaFutbol.view.Recaudo', {
    extend: 'Ext.form.Panel',
    alias : "widget.recaudo",
    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.Number'
    ],

    height: 447,
    
    autoScroll: true,
    bodyPadding: 10,
    title: 'Recaudo',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    title: 'Cobros por cliente',
                    store : 'EscuelaFutbol.store.SuscripcionesNuevas',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'nombre',
                            text: 'Cliente'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'number',
                            text: 'Categoria'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'date',
                            text: 'Fecha Cobro '
                        },
                        {
                            xtype: 'booleancolumn',
                            dataIndex: 'bool',
                            text: 'Boolean'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            layout :{type : 'column'},
                            items: [
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: 'Cliente'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: 'Categoria'
                                        }
                                    ]
                                },
                                  {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: 'Nombre',
                                            widht: 400

                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    text: 'Buscar'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: 'Datos del recaudo',
                    items: [
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Fecha ',
                            value: '07/19/2014'
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Uniforme',
                    value: 10000
                },
                 {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Incripcion',
                    value: 10000
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Transporte',
                    value: 10000
                },

                 {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Actividades',
                    value: 10000
                },
                   {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Otros',
                    value: 10000
                },


                {
                    xtype : 'label',
                    text  : 'Total : 50000'

                }
            ]
        });

        me.callParent(arguments);
    }

});