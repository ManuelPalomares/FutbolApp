Ext.define('EscuelaFutbol.Application', {
    name: 'EscuelaFutbol',

    extend: 'Ext.app.Application',

    views: [
        "EscuelaFutbol.view.BannerPrincipal",
        "EscuelaFutbol.view.MenuPrincipal",
        "EscuelaFutbol.view.NuevosClientes",
        "EscuelaFutbol.view.EnvioCorreoSolicitudesNuevas",
        "EscuelaFutbol.view.CitacionDeportiva",
        "EscuelaFutbol.view.Recaudo",
        "EscuelaFutbol.view.ClientesPagosPendiente",
        "EscuelaFutbol.view.ImpresionReciboPago",
        "EscuelaFutbol.view.Suscripcion",
        "EscuelaFutbol.view.Jugador",
        "EscuelaFutbol.view.MenuPrincipalPanel",
        "EscuelaFutbol.view.ActualizarDatosJugador"
    ],

    controllers: [
        "EscuelaFutbol.controller.Main"
    ],

    stores: [
        "EscuelaFutbol.store.MenuPrincipalStore",
        "EscuelaFutbol.store.SuscripcionesNuevas",
        "EscuelaFutbol.store.Implementos"
    ]
});