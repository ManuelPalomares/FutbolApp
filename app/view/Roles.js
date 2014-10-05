Ext.define('EscuelaFutbol.view.Roles', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],
    alias: "widget.formularioRoles",
    height: 300,
    width: 900,
    autoScroll: true,
    bodyPadding: 10,
    id : "x_formularioRoles",
    title: 'Formulario de creacion de Roles',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                    xtype: 'numberfield',
                    name: 'codigo',
                    fieldLabel: 'Codigo',
                    allowBlank: true
                },{
                    xtype: "textfield",
                    name : "descripcion",
                    maxLength: 100,
                    fieldLabel: 'Descripcion del Rol',
                    allowBlank: false
                }
            ],
            dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    items : [{
                            xtype : "button",
                            text  : "Guardar",
                            icon  : "http://4vector.com/thumb_data/afd-9100.jpg",
                            width: 100,
                            height: 100,
                            style: {margin: '0.5em'},
                            iconCls : "x_iconosBotonesForma",
                            iconAlign : "top",
                            id : "x_guardarRoles"
                    },{
                            xtype : "button",
                            text  : "Eliminar"
                            
                    }]
            }]
        });

        me.callParent(arguments);
    }
});
