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
    alias : "widget.formularioRoles",
    height: 504,
    width: 631,
    autoScroll: true,
    bodyPadding: 10,
    title: 'Suscripcion',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
            
            ]
        });

        me.callParent(arguments);
    }
});
