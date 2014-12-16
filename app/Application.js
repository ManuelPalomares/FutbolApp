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
        "EscuelaFutbol.view.ActualizarDatosJugador",
        "EscuelaFutbol.view.Roles",
        "EscuelaFutbol.view.Agendamiento",
        "EscuelaFutbol.view.Entrenadores",
        "EscuelaFutbol.view.EvaluacionJugadores"
        
    ],

    controllers: [
        "EscuelaFutbol.controller.HostServer",
        "EscuelaFutbol.controller.Main",
        "EscuelaFutbol.controller.Login",
        "EscuelaFutbol.controller.Roles",
        "EscuelaFutbol.controller.CitacionDeportiva",
        "EscuelaFutbol.controller.NuevosClientes",
        "EscuelaFutbol.controller.Jugadores",
        "EscuelaFutbol.controller.Agendamiento",
        "EscuelaFutbol.controller.Entrenadores",
        "EscuelaFutbol.controller.EvaluacionJugadores"
    ],

    stores: [
        "EscuelaFutbol.store.MenuPrincipalStore",
        "EscuelaFutbol.store.SuscripcionesNuevas",
        "EscuelaFutbol.store.Implementos",
        "EscuelaFutbol.store.Roles",
        "EscuelaFutbol.store.TipoDocumento",
        "EscuelaFutbol.store.Estado",
        "EscuelaFutbol.store.Genero",
        "EscuelaFutbol.store.EstadosEventos",
        "EscuelaFutbol.store.Eventos",
        "EscuelaFutbol.store.AgendadosEventos",
        "EscuelaFutbol.store.Parentesco",
        "EscuelaFutbol.store.TipoSangre",
        "EscuelaFutbol.store.Ciudades",
        "EscuelaFutbol.store.Categorias",
        "EscuelaFutbol.store.Suscriptores",
        "EscuelaFutbol.store.Jugadores",
        "EscuelaFutbol.store.Usuarios",
        "EscuelaFutbol.store.Entrenadores",
        "EscuelaFutbol.store.EntrenadoresGrilla"
    ],
    launch : function(){
        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();
        Ext.Ajax.request({
            url: host+"php/session/session.php",
            success: function(response){
                var result = Ext.decode(response.responseText);
                //valida si el usuario no esta registrado
                
                if(result.message_error === "Usuario no registrado"){
                    var win = Ext.create("Ext.window.Window",{
                        width : 300,
                        id : "x_ventanalogin",
                        height : 150,
                        modal  : true,
                        title : "Inicio de sesion",
                        resizable: false,
                        closable: false,
                        items : [{xtype  : "x_loginForm"}],
                        bbar : [
                             '->',{
                            xtype : "button",
                            id :  "x_login",
                            text : "Iniciar sesión"
                        }]
                    });
                    win.show();
                    return;
                }

                Ext.create("EscuelaFutbol.view.Viewport");
                
                Ext.getCmp("x_labelNombreUsuario").setText(result.nombre);
            },
            failure: function(response){
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }
        });
    }
});