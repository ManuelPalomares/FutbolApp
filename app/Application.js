Ext.define('EscuelaFutbol.Application', {
    name: 'EscuelaFutbol',

    extend: 'Ext.app.Application',

    views: [
        "EscuelaFutbol.view.BannerPrincipal",
        "EscuelaFutbol.view.MenuPrincipal",
        "EscuelaFutbol.view.NuevosClientes",
        "EscuelaFutbol.view.EnvioCorreoSolicitudesNuevas"
    ],

    controllers: [
        "EscuelaFutbol.controller.Main"
    ],

    stores: [
        "EscuelaFutbol.store.MenuPrincipalStore",
        "EscuelaFutbol.store.SuscripcionesNuevas"
    ]
});
