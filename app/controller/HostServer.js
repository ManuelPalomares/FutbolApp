Ext.define('EscuelaFutbol.controller.HostServer', {
    extend: 'Ext.app.Controller',
    getHost : function(){
        return "http://localhost/FutbolAppPhp/";
        //return "http://escueladefutbol.webmapsoft.com/";
    }
});
