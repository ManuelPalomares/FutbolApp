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
    width: 670,
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
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: 'Cliente'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'number',
                            text: 'Categoriq'
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
                                            fieldLabel: 'Categoriq'
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
                    fieldLabel: 'Paga tanto',
                    value: 10000
                }
            ]
        });

        me.callParent(arguments);
    }

});