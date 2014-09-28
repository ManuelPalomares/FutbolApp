Ext.define('EscuelaFutbol.Application', {
    name: 'EscuelaFutbol',

    extend: 'Ext.app.Application',

    views: [
        "EscuelaFutbol.view.LoginForm",
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
        "EscuelaFutbol.controller.Main",
        "EscuelaFutbol.controller.Login"
    ],

    stores: [
        "EscuelaFutbol.store.MenuPrincipalStore",
        "EscuelaFutbol.store.SuscripcionesNuevas",
        "EscuelaFutbol.store.Implementos"
    ],
    launch : function(){
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        //var host = "http://localhost/FutbolAppPhp/";

        Ext.Ajax.request({
            url: host+"php/session/session.php",
            defaultHeaders: {'Origin': 'http://localhost'},
            success: function(response){
                var result = Ext.decode(response.responseText);
                //valida si el usuario no esta registrado
                
                if(result.message_error === "Usuario no registrado"){
                    var win = Ext.create("Ext.window.Window",{
                        width : 300,
                        id : "x_ventanalogin",
                        height : 150,
                        modal  : true,
                        title : "Inicio de session",
                        resizable: false,
                        closable: false,
                        items : [{xtype  : "x_loginForm"}],
                        bbar : [
                             '->',{
                            xtype : "button",
                            id :  "x_login",
                            text : "Ingresar"
                        }]
                    });
                    win.show();
                    return;
                }

                Ext.create("EscuelaFutbol.view.Viewport");
                
            },
            failure: function(response){
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }
        });

        
        //Ext.create("EscuelaFutbol.view.Viewport");
    }
});