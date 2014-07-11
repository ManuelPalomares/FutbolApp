Ext.define('EscuelaFutbol.Application', {
    name: 'EscuelaFutbol',

    extend: 'Ext.app.Application',

    views: [
        "EscuelaFutbol.view.BannerPrincipal",
        "EscuelaFutbol.view.MenuPrincipal",
        "EscuelaFutbol.view.NuevosClientes"
    ],

    controllers: [
        "EscuelaFutbol.controller.Main"
    ],

    stores: [
        "EscuelaFutbol.store.MenuPrincipalStore"
    ]
});
