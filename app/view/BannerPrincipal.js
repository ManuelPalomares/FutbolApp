Ext.define('EscuelaFutbol.view.BannerPrincipal', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.layout.container.Column'
    ],
    alias: "widget.bannerppal",
    layout: {
        type: 'column',
        align: 'left'
    },
    items: [{
            xtype: "container",
            width: "60%",
            style: "margin :0.5em;display:inline-block;",
            html: "<img  alt='logo' width='25%' height='55px' src='resources/img/logoChampions.jpg'></img><div class='x_tituloApp'>Sistema de Gestión Deportiva Escuela de Futbol Champions</div>"
        }, {
            xtype: "container",
            width: "30%",
            cls: "x_panelSession",
            
            layout: {
                type: 'column', // Arrange child items vertically
                align: 'center'    // Each takes up full width
            },
            items: [{
                    xtype: "container",
                    items: [
                        {xtype: "label", id: "x_labelUsuario", text: "Nombre de usuario : "}, 
                        {xtype: "label", id: "x_labelNombreUsuario", text: "", style : 'margin-left:0.5em'}]
                }, {
                    xtype: "button",
                    id: "x_botonCerrarSesion",
                    text: "Cerrar Sesion"
                }]
        }]
});