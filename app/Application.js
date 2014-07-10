Ext.define('EscuelaFutbol.Application', {
    name: 'EscuelaFutbol',

    extend: 'Ext.app.Application',

    views: [
        "EscuelaFutbol.view.BannerPrincipal",
        "EscuelaFutbol.view.MenuPrincipal"
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        "EscuelaFutbol.store.MenuPrincipalStore"
    ]
});
