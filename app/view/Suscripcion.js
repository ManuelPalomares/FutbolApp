Ext.define('EscuelaFutbol.view.Suscripcion', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],
    alias : "widget.suscripcion",
    height: 504,
    width: 631,
    autoScroll: true,
    bodyPadding: 10,
    title: 'Suscripcion',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Codigo Suscripcion'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 400,
                            fieldLabel: 'Nombre Suscriptor'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'datefield',
                            width: 300,
                            fieldLabel: 'Fecha inicio Inscripcion'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 300,
                            fieldLabel: 'Estado'
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
                            text: 'Acciones',
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        text: 'Guardar'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});