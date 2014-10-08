Ext.define('EscuelaFutbol.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            '#x_menuPanelPrincipal': {
                render: this.cargarMenu
            },
            'button[iconCls=x_iconosBotones] >menu': {
                click: this.llamaOpcion
            },
            '#x_botonCerrarSesion': {
                click: this.cerrarSesion
            }
        });
    },
    cargarMenu: function(panel, opt) {

        var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();

        Ext.Ajax.request({
            url: host + "php/menus/menu.php",
            params: {
                accion: "CONSULTARMODULOS"
            },
            success: function(response) {
                var varMenu = Ext.decode(response.responseText);
                //console.log(modulos);
                for (var i = 0; i < varMenu.modulos.length; i++) {
                    //console.log(varMenu.modulos[i]);
                    var submenuDatos = varMenu.modulos[i].SUBMENUS;
                    var submenu = Ext.create('Ext.menu.Menu');

                    //crea menu del objeto submenu
                    for (var x = 0; x < submenuDatos.length; x++) {
                        submenu.add({
                            text: submenuDatos[x].DESCRIPCION,
                            xtypeID: submenuDatos[x].WIDGETALIAS
                        });
                    }
                    var boton = Ext.create("Ext.Button", {
                        xtype: "button",
                        text: varMenu.modulos[i].DESCRIPCION,
                        style: {margin: '0.5em'},
                        height: 200,
                        icon: varMenu.modulos[i].URL_ICON,
                        iconAlign: 'top',
                        iconCls: 'x_iconosBotones',
                        menu: submenu
                    });
                    panel.add(boton);
                }

            },
            failure: function(response) {
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }

        });

    },
    llamaOpcion: function(btn, item) {
        var itemOpcion = item.text;
        var xtypeID = item.xtypeID;
        var ventana = Ext.create("Ext.window.Window", {
            modal: true,
            width: 900,
            height: 500,
            autoScroll: true,
            title: itemOpcion,
            maximizable: true,
            items: [{
                    xtype: xtypeID
                }],
            closable: true
        });
        ventana.show();
    },
    cerrarSesion: function(btn, opt) {

        Ext.MessageBox.confirm('Advertencia', 'Esta seguro de cerrar su sesion?', function(btn) {
            
            if (btn === "no")
                return false;
            
            var host = Ext.create("EscuelaFutbol.controller.HostServer").getHost();


            Ext.Ajax.request({
                url: host + "php/session/logaccess.php",
                params: {
                    accion: "CERRARSESION"
                },
                success: function(response) {
                    var varRes = Ext.decode(response.responseText);
                    if(varRes.success){
                         location.reload(true);
                    }
                    
                },
                failure: function(response) {
                    alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
                }
            });
        });


    }
});
