Ext.define('EscuelaFutbol.store.Roles', {
    extend: 'Ext.data.Store',
    requires: ['EscuelaFutbol.model.Roles'],
    proxy: {
        type: 'ajax',
        url: Ext.create("EscuelaFutbol.controller.HostServer").getHost() + 'php/seguridad/roles.php',
        reader: {
            type: 'json',
            root: 'roles'
        },
        extraParams: {"accion": "CONSULTAR"}
    },
    autoLoad: true
});