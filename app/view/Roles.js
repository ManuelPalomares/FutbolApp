Ext.define('EscuelaFutbol.view.Roles', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.data.Store'

    ],
    alias: "widget.formularioRoles",
    height: "100%",
    width: "100%",
    autoScroll: true,
    bodyPadding: 10,
    id: "x_formularioRoles",
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                    xtype: 'numberfield',
                    name: 'codigo',
                    fieldLabel: 'Codigo',
                    allowBlank: true,
                    editable: false,
                    hideTrigger: true,
                    id : "x_codigoRol"
                }, {
                    xtype: "textfield",
                    name: "descripcion",
                    id: "x_descripcionRol",
                    maxLength: 100,
                    fieldLabel: 'Descripcion del Rol',
                    allowBlank: false
                }, {
                    xtype: "gridpanel",
                    scrollable: true,
                    title: "Listado de roles",
                    id   : "x_grid_roles",
                    store:Ext.create("EscuelaFutbol.store.Roles"),
                    columns: [
                        {xtype :'gridcolumn',text: "Codigo", width: "10%", dataIndex: "codigo"},
                        {xtype :'gridcolumn',text: "Descripcion", width: "90%", dataIndex: "descripcion"}
                    ],
                    height: 200
                }
            ],
            dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                            xtype: "button",
                            text: "Nuevo",
                            icon: "resources/img/btns/nuevo.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_NuevoRol"
                        }, {
                            xtype: "button",
                            text: "Guardar",
                            icon: "resources/img/btns/guardar.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_guardarRoles"
                        }, {
                            xtype: "button",
                            text: "Eliminar",
                            icon: "resources/img/btns/eliminar.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_eliminarRoles"
                        }]
                }]
        });

        me.callParent(arguments);
    }
});
