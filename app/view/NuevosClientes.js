/*Ext.define('EscuelaFutbol.view.NuevosClientes', {
    extend: 'Ext.form.Panel',
    alias : 'widget.nuevosClientes',
    id : "x_nuevosClientes",
    html : "<h1>Nuevos clientes</h1>"
});
*/

Ext.define('EscuelaFutbol.view.NuevosClientes', {
    extend: 'Ext.form.Panel',
    id : "x_nuevosClientes",
    alias : 'widget.nuevosClientes',

    requires: [
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    height: 284,
    width: 468,
    bodyPadding: 10,
    title: 'Registro de clientes nuevos',
    waitTitle: 'Guardando la informacion',

    initComponent: function() {
        var me = this;

        me.initialConfig = Ext.apply({
            waitTitle: 'Guardando la informacion'
        }, me.initialConfig);

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nombre'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Apellidos'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: 150,
                    items: [
                        {
                            xtype: 'textfield',
                            width: 400,
                            fieldLabel: 'Direccion'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: 150,
                    items: [
                        {
                            xtype: 'textfield',
                            width: 400,
                            fieldLabel: 'Correo',
                            inputType: 'email'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: 150,
                    items: [
                        {
                            xtype: 'datefield',
                            width: 300,
                            fieldLabel: 'Fecha Nacimiento'
                            
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
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'Eliminar'
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