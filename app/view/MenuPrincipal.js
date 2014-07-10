Ext.define('EscuelaFutbol.view.MenuPrincipal', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.menuppal',
    requires:["Ext.data.TreeStore"],
    width : '100%',
    store : "EscuelaFutbol.store.MenuPrincipalStore"


});