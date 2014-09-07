Ext.define('EscuelaFutbol.view.ActualizarDatosJugador', {
    extend: 'Ext.form.Panel',
    alias : "widget.actualizarDatosJugador",
    requires: [
        'Ext.container.Container',
        'Ext.form.field.Date',
        'Ext.Img',
        'Ext.form.field.ComboBox'
    ],
    autoScroll: true,
    bodyPadding: 10,
    title: 'Datos del jugador',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    layout : 'vbox',
                    items: [
                        {
                            xtype: 'image',
                            height: 100,
                            width: 100,
                            style : "border: 1pt solid;",
                            src : "http://comutricolor.com/wp-content/uploads/2014/05/carlos-el-pibe-valderrama.jpg"
                        },{
                            xtype : "button",
                            text : "Cambiar Imagen"
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nombres',
                            size: 70
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Apellidos',
                            size: 70
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Edad',
                            inputType: 'number'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Seguridad Social',
                            size: 50
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Doc. Identidad',
                            size: 50
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Fecha Exp'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Fecha Nac'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Lugar',
                            size: 50
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Dirección',
                            size: 70
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Barrio',
                            size: 70
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Teléfono',
                            inputType: 'tel'
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