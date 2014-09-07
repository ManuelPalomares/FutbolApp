Ext.define('EscuelaFutbol.view.EnvioCorreoSolicitudesNuevas', {
    extend: 'Ext.form.Panel',
    alias : 'widget.envioSolicitudesNuevas',
    requires: [
        'Ext.form.field.HtmlEditor',
        'Ext.grid.Panel',
        'Ext.grid.column.Column'
    ],
    bodyPadding: 10,
    title: 'Formulario de envio informacion de escuela',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    height: 150,
                    fieldLabel: 'Correo mensaje a enviar '
                },
                {
                    xtype: 'gridpanel',
                    title: 'Suscripciones o usuarios a enviar correo',
                    store: 'EscuelaFutbol.store.SuscripcionesNuevas',
                     columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'nombre',
                            text: 'Nombre'
                        },
                        {
                            xtype: 'gridcolumn',
                            defaultWidth: 120,
                            dataIndex: 'telefono',
                            text: 'Telefono'
                        },
                        {
                            xtype: 'templatecolumn',
                            tpl: [
                                '<input type="checkbox"></input>'
                            ],
                            text: 'Enviar Correo'
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