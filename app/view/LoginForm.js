Ext.define('EscuelaFutbol.view.LoginForm', {
    extend: 'Ext.form.Panel',
     alias : "widget.x_loginForm",
     id : "x_formLogin",
     height: 464,
    width: 729,
    autoScroll: true,
    bodyPadding: 10,
    initComponent: function() {
     	var me = this;
        Ext.applyIf(me, {
        	items : [{
        		xtype : "textfield",
                name : "usuario",
     			fieldLabel : "Usuario",
                allowBlank: false
     		},{
     			xtype : "textfield",
                name : "password",
     			fieldLabel : "Password",
                allowBlank: false,
                inputType: "password"
     		}]
     	});
        me.callParent(arguments);
 }
});
