Ext.define('EscuelaFutbol.store.MenuPrincipalStore', {
	extend : 'Ext.data.TreeStore',
  	root: {
  	text : "Modulos",
    expanded: true,
    scroll : 'both',
    children: [
        
        { text: "Mercadeo y ventas", expanded: false, 
        	children: [
        		{ text: "Registro de Nuevos clientes", leaf: true },
        		{ text: "Envio de informacion de eventos y partidos", leaf: true}
        		] 
		},
		{ text: "Evaluacion de jugadores nuevos", expanded: false, 
        	children: [
        		{ text: "Citacion de prueba deportiva", leaf: true },
        		{ text: "Registro de Evaluacion", leaf: true}
        		] 
		},
		{ text: "Inscripción y Gestión Deportiva", expanded: false, 
        	children: [
        		{ text: "Registro de suscripcion", leaf: true },
                { text: "Jugador", leaf: true},
        		{ text: "Comunicado de partidos", leaf: true},
        		{ text: "Registro de ficha de seguimiento por jugador", leaf: true},
        		{ text: "Reclasificacion de categorias individual o grupo", leaf: true}
        		] 
		},
		{ text: "Recaudos", expanded: false, 
        	children: [
        		{ text: "Generacion manual de cobro de pago", leaf: true },
        		{ text: "Ingreso de pago", leaf: true},
        		{ text: "Impresion de recibo de pago", leaf: true},
        		{ text: "Notificacion de clientes morosos", leaf: true}
        		] 
		},
		{ text: "Informes", expanded: false, 
        	children: [
        		{ text: "Impresion de evaluacion inicial del jugador", leaf: true },
        		{ text: "Impresion inscripcion", leaf: true},
        		{ text: "Impresion ficha de seguimiento jugadores", leaf: true},
        		{ text: "Impresion de clientes pendientes de pago", leaf: true}
        		] 
		}
        
        ]
    }
});
