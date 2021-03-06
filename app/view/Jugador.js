Ext.define('EscuelaFutbol.view.Jugador', {
    extend: 'Ext.form.Panel',
    alias: "widget.fichaInscripcionJugadores",
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldSet',
        'Ext.Img',
        'Ext.grid.Panel',
        'Ext.grid.column.Template',
        'Ext.XTemplate'
    ],
    height: 570,
    id: 'x_formularioJugadores',
    width: 1050,
    layout: 'column',
    bodyPadding: 2,
    //title: 'Ficha de Inscripción del jugador',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    items: [
                        {xtype: 'panel',
                            bodyPadding: 2,
                            layout: 'hbox',
                            width: 1030,
                            //collapsible: true,
                            title: 'Datos del Jugador',
                            items: [
                                {
                                    xtype: 'container',
                                    width: '65%',
                                    height: 450,
                                    autoScroll: true,
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            height: 150,
                                            width: 640,
                                            fieldLabel: '',
                                            layout: 'column',
                                            items: [
                                                {
                                                    xtype: "container",
                                                    layout: 'vbox',
                                                    width: 140,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            text: 'Subir Foto',
                                                            width: 130,
                                                            style: 'margin:0.2em',
                                                            id: 'x_subirfotoJugador'
                                                        }, {
                                                            xtype: 'image',
                                                            height: 140,
                                                            width: 130,
                                                            id: 'x_fotoJugador',
                                                            src: 'resources/img/foto_jugadores.png'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            id: 'x_fotoJugadorCampo',
                                                            name: 'foto',
                                                            hidden: true
                                                        }
                                                    ]
                                                }
                                                ,
                                                {
                                                    xtype: 'fieldcontainer',
                                                    width: 480,
                                                    fieldLabel: '',
                                                    layout: 'column',
                                                    items: [{
                                                            xtype: 'datefield',
                                                            margin: 3,
                                                            fieldLabel: 'Fecha Ingreso',
                                                            name: 'fecha_ingreso',
                                                            editable: false,
                                                            format: 'Y/d/m',
                                                            value: new Date(),
                                                            hideTrigger: true,
                                                            disabled: true,
                                                            width: 170,
                                                            labelWidth: 90
                                                        },
                                                        {
                                                            xtype: 'numberfield',
                                                            width: 100,
                                                            fieldLabel: 'ID:',
                                                            name: 'codigo',
                                                            maxLength: 11,
                                                            editable: false,
                                                            id: 'x_codigoJugador',
                                                            hideTrigger: true,
                                                            //margin: 3,
                                                            style: {marginTop: '3px', marginLeft: '15px'},
                                                            labelWidth: 30
                                                        },
                                                        {
                                                            xtype: 'combobox',
                                                            width: 170,
                                                            fieldLabel: 'Estado:',
                                                            name: 'estado',
                                                            store: 'EscuelaFutbol.store.Estado',
                                                            displayField: 'descripcion',
                                                            valueField: 'codigo',
                                                            queryMode: 'local',
                                                            allowBlank: false,
                                                            value: 'A',
                                                            //margin: 3,
                                                            labelWidth: 50,
                                                            style: {marginTop: '3px', marginLeft: '15px'}
                                                        }
                                                    ]},
                                                {
                                                    xtype: 'fieldcontainer',
                                                    width: 500,
                                                    fieldLabel: '',
                                                    style: {marginTop: '30px'},
                                                    layout: 'column',
                                                    items: [
                                                        {
                                                            xtype: 'combobox',
                                                            margin: 3,
                                                            width: 120,
                                                            fieldLabel: 'Tipo Doc:',
                                                            name: 'tipo_documento',
                                                            displayField: 'descripcion',
                                                            store: 'EscuelaFutbol.store.TipoDocumento',
                                                            valueField: 'codigo',
                                                            queryMode: 'local',
                                                            id: 'x_tipoDocumentoJugador',
                                                            //style: {marginTop: '20px', marginLeft: '3px'},
                                                            labelWidth: 60,
                                                            allowBlank: false
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            style: {marginTop: '3px', marginLeft: '10px'},
                                                            width: 180,
                                                            fieldLabel: 'Documento:',
                                                            labelWidth: 60,
                                                            name: 'doc_identidad',
                                                            maxLength: 50,
                                                            allowBlank: false
                                                        },
                                                        {
                                                            xtype: 'datefield',
                                                            //margin: 3,
                                                            width: 150,
                                                            style: {marginTop: '3px', marginLeft: '10px'},
                                                            fieldLabel: 'Fecha Exp:',
                                                            labelWidth: 60,
                                                            format: 'Y/d/m',
                                                            name: 'fecha_expedicion',
                                                            allowBlank: false
                                                        }]},
                                                {
                                                    xtype: 'fieldcontainer',
                                                    width: 500,
                                                    fieldLabel: '',
                                                    layout: 'column',
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            style: {marginTop: '5px', marginLeft: '3px'},
                                                            //margin: 3,
                                                            width: 235,
                                                            fieldLabel: 'Nombres:',
                                                            name: 'nombres',
                                                            labelWidth: 60,
                                                            maxLength: 100,
                                                            allowBlank: false,
                                                            id:'x_nombres'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 235,
                                                            fieldLabel: 'Apellidos:',
                                                            name: 'apellidos',
                                                            labelWidth: 65,
                                                            allowBlank: false,
                                                            maxLength: 100,
                                                            style: {marginTop: '5px', marginLeft: '5px'},
                                                            id:'x_apellidos'
                                                        }]},
                                                {
                                                    xtype: 'fieldcontainer',
                                                    width: 500,
                                                    layout: 'column',
                                                    items: [
                                                        {
                                                            xtype: 'datefield',
                                                            //margin: 3,
                                                            width: 150,
                                                            fieldLabel: 'Fec Nac:',
                                                            format: 'Y/d/m',
                                                            labelWidth: 60,
                                                            allowBlank: false,
                                                            name: 'fecha_nacimiento'
                                                            , style: {marginTop: '5px', marginLeft: '3px'}
                                                        },
                                                        {
                                                            xtype: 'combobox',
                                                            //margin: 3,
                                                            width: 310,
                                                            fieldLabel: 'Lugar Nac:',
                                                            labelWidth: 60,
                                                            name: 'codigo_lugar_nacimiento',
                                                            displayField: 'descripcion',
                                                            valueField: 'codigo',
                                                            queryMode: 'local',
                                                            allowBlank: false,
                                                            store: Ext.create('EscuelaFutbol.store.Ciudades'),
                                                            style: {marginTop: '5px', marginLeft: '10px'}
                                                        }
                                                    ]
                                                }

                                            ]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            height: 600,
                                            width: 630,
                                            fieldLabel: '',
                                            style: {marginTop: '10px'},
                                            layout: 'column',
                                            items:
                                                    [
                                                        {
                                                            xtype: 'combobox',
                                                            //margin: 3,
                                                            width: 220,
                                                            fieldLabel: 'Tipo Sangre:',
                                                            labelWidth: 70,
                                                            allowBlank: false,
                                                            name: 'tipo_sangre',
                                                            store: 'EscuelaFutbol.store.TipoSangre',
                                                            displayField: 'descripcion',
                                                            valueField: 'codigo',
                                                            queryMode: 'local',
                                                            style: {marginTop: '15px', marginLeft: '3px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 390,
                                                            fieldLabel: 'Dirección',
                                                            name: 'direccion',
                                                            maxLength: 200,
                                                            labelWidth: 70

                                                            , style: {marginTop: '15px', marginLeft: '10px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 305,
                                                            fieldLabel: 'Barrio:',
                                                            name: 'barrio',
                                                            maxLength: 100,
                                                            labelWidth: 70
                                                            , style: {marginTop: '5px', marginLeft: '3px'}
                                                        },
                                                        {
                                                            xtype: 'combobox',
                                                            style: {marginTop: '5px', marginLeft: '10px'},
                                                            width: 115,
                                                            fieldLabel: 'Sexo:',
                                                            labelWidth: 65,
                                                            name: 'genero',
                                                            store: 'EscuelaFutbol.store.Genero',
                                                            displayField: 'descripcion',
                                                            valueField: 'codigo',
                                                            queryMode: 'local'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 180,
                                                            fieldLabel: 'Tel Fijo:',
                                                            name: 'telefono',
                                                            maxLength: 50,
                                                            labelWidth: 50
                                                            , style: {marginTop: '5px', marginLeft: '10px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 220,
                                                            fieldLabel: 'Celular:',
                                                            labelWidth: 70,
                                                            name: 'celular',
                                                            maxLength: 50
                                                            , style: {marginTop: '5px', marginLeft: '3px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 200,
                                                            fieldLabel: 'BB_PIN',
                                                            labelWidth: 70,
                                                            name: 'BB_PIN',
                                                            maxLength: 20,
                                                            style: {marginTop: '5px', marginLeft: '10px'},
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 180,
                                                            fieldLabel: 'EPS:',
                                                            name: 'seguridad_social',
                                                            maxLength: 100,
                                                            labelWidth: 50,
                                                            style: {marginTop: '5px', marginLeft: '10px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 430,
                                                            fieldLabel: 'Colegio:',
                                                            name: 'colegio',
                                                            maxLength: 100,
                                                            labelWidth: 70
                                                            , style: {marginTop: '5px', marginLeft: '3px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 180,
                                                            fieldLabel: 'Grado:',
                                                            labelWidth: 50,
                                                            name: 'grado',
                                                            maxLength: 50
                                                            , style: {marginTop: '5px', marginLeft: '10px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 5,
                                                            width: 220,
                                                            fieldLabel: 'Jornada:',
                                                            labelWidth: 70,
                                                            name: 'jornada_colegio',
                                                            maxLength: 20
                                                            , style: {marginTop: '5px', marginLeft: '3px'}
                                                            //allowBlank : false
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 390,
                                                            fieldLabel: 'Email:',
                                                            name: 'email',
                                                            maxLength: 200,
                                                            vtype: 'email',
                                                            labelWidth: 70,
                                                            allowBlank: false,
                                                            style: {marginTop: '5px', marginLeft: '10px'}
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 110,
                                                            fieldLabel: 'Exp Dep:',
                                                            labelWidth: 70,
                                                            name: 'exp_deportiva',
                                                            maxLength: 2,
                                                            style: {marginTop: '5px', marginLeft: '3px'}
                                                            //allowBlank : false
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 250,
                                                            fieldLabel: 'Referido:',
                                                            labelWidth: 70,
                                                            name: 'referido',
                                                            maxLength: 100,
                                                            style: {marginTop: '5px', marginLeft: '5px'}
                                                            //allowBlank : false
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            //margin: 3,
                                                            width: 250,
                                                            fieldLabel: 'Responsable:',
                                                            labelWidth: 70,
                                                            name: 'responsable',
                                                            style: {marginTop: '5px', marginLeft: '5px'},
                                                            maxLength: 100
                                                                    //allowBlank : false
                                                        },
                                                        {
                                                            xtype: 'combobox',
                                                            //margin: 3,
                                                            width: 320,
                                                            fieldLabel: 'Categoría',
                                                            name: 'codigo_categoria',
                                                            displayField: 'descripcion',
                                                            valueField: 'codigo',
                                                            queryMode: 'local',
                                                            store: Ext.create('EscuelaFutbol.store.Categorias'),
                                                            labelWidth: 70,
                                                            style: {marginTop: '5px', marginLeft: '3px'}
                                                        },
                                                        {
                                                            xtype: 'fieldset',
                                                            layout: 'column',
                                                            //collapsible: true,
                                                            style: {marginTop: '10px'},
                                                            title: 'Información de  pagos',
                                                            items: [
                                                                {
                                                                    xtype: 'textfield',
                                                                    //margin: 3,
                                                                    width: 230,
                                                                    fieldLabel: 'Inscripción:',
                                                                    //labelWidth: 70,
                                                                    name: 'inscripcion',
                                                                    maxLength: 15,
                                                                    allowBlank: false,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    //margin: 3,
                                                                    width: 230,
                                                                    fieldLabel: 'Mensualidad:',
                                                                    //labelWidth: 70,
                                                                    name: 'mensualidad',
                                                                    maxLength: 15,
                                                                    allowBlank: false,
                                                                    style: {marginTop: '5px', marginLeft: '60px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    margin: 3,
                                                                    width: 230,
                                                                    fieldLabel: 'Transporte:',
                                                                    //labelWidth: 70,
                                                                    name: 'transporte',
                                                                    maxLength: 15,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                    //allowBlank : false
                                                                }
                                                    ]
                                                        },
                                                        {
                                                            xtype: 'fieldset',
                                                            layout: 'column',
                                                            //collapsible: true,
                                                            style: {marginTop: '10px'},
                                                            title: 'Datos de la madre',
                                                            items: [
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Nombre Madre:',
                                                                    name: 'nombre_madre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 230,
                                                                    fieldLabel: 'Celular:',
                                                                    labelWidth: 100,
                                                                    name: 'celular_madre',
                                                                    maxLength: 20,
                                                                    style: {marginTop: '5px', marginLeft: '10px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Email:',
                                                                    labelWidth: 100,
                                                                    name: 'email_madre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Ocupación:',
                                                                    labelWidth: 100,
                                                                    name: 'ocupacion_madre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '10px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Empresa:',
                                                                    labelWidth: 100,
                                                                    name: 'empresa_madre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            xtype: 'fieldset',
                                                            layout: 'column',
                                                            //collapsible: true,
                                                            style: {marginTop: '10px'},
                                                            title: 'Datos del padre',
                                                            items: [
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Nombre Padre:',
                                                                    name: 'nombre_padre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 230,
                                                                    fieldLabel: 'Celular:',
                                                                    labelWidth: 100,
                                                                    name: 'celular_padre',
                                                                    maxLength: 20,
                                                                    style: {marginTop: '5px', marginLeft: '10px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Email:',
                                                                    labelWidth: 100,
                                                                    name: 'email_padre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Ocupación:',
                                                                    labelWidth: 100,
                                                                    name: 'ocupacion_padre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '10px'}
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    width: 280,
                                                                    fieldLabel: 'Empresa:',
                                                                    labelWidth: 100,
                                                                    name: 'empresa_padre',
                                                                    maxLength: 100,
                                                                    style: {marginTop: '5px', marginLeft: '3px'}
                                                                }
                                                            ]
                                                        }

                                                        ,
                                                        {
                                                            xtype: 'textareafield',
                                                            width: 620,
                                                            fieldLabel: 'Observac:',
                                                            name: 'observaciones',
                                                            maxLength: 2000,
                                                            labelWidth: 70,
                                                            height: 40,
                                                            style: {marginTop: '10px', marginLeft: '3px'}
                                                        }
                                                    ]
                                        }

                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    id: 'x_grillaJugadores',
                                    height: 460,
                                    width: '35%', //800,
                                    title: 'Listado de Jugadores',
                                    scroll: true,
                                    store: 'EscuelaFutbol.store.Jugadores',
                                    columns: [{
                                            xtype: 'gridcolumn',
                                            text: 'Identificación',
                                            dataIndex: 'doc_identidad',
                                            width: 100
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            text: 'Apellidos y Nombres',
                                            dataIndex: 'nombre_completo',
                                            width: 220
                                        }
                                    ],
                                    tbar: [
                                        {
                                            xtype: 'fieldset',
                                            width : '100%',
                                            layout: 'anchor',
                                            collapsible:true,
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    fieldLabel: 'Categoria',
                                                    queryMode: 'local',
                                                    id: 'x_comboCategoria',
                                                    //name: 'codigo_categoria',
                                                    displayField: 'descripcion',
                                                    valueField: 'codigo',
                                                    store: Ext.create('EscuelaFutbol.store.Categorias')
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    width: 300,
                                                    fieldLabel: 'Nombre Jugador',
                                                    
                                                    displayField: 'nombre_completo',
                                                    //tpl : '<div><img src="'+Ext.create("EscuelaFutbol.controller.HostServer").getHost()+"files/fotosjugadores/"+'{foto}"></img></div><div>{nombres} {apellidos}</div>',
                                                    tpl: Ext.create('Ext.XTemplate', '<tpl for="."><div class="x-boundlist-item"><img width="100px" height="100px" src="' + Ext.create("EscuelaFutbol.controller.HostServer").getHost() + "files/fotosjugadores/" + '{foto}"></img>{nombres} {apellidos}</div></tpl>'),
                                                    valueField: 'codigo',
                                                    queryMode: 'remote',
                                                    id: 'x_jugador_filtro',
                                                    store: Ext.create('EscuelaFutbol.store.Jugadores')
                                                }
                                            ]
                                        }

                                    ],
                                    dockedItems: [{
                                            xtype: 'pagingtoolbar',
                                            store: 'EscuelaFutbol.store.Jugadores', // same store GridPanel is using
                                            dock: 'bottom',
                                            displayInfo: false

                                        }]

                                }]
                        }
                    ]
                }],
            dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                            xtype: "button",
                            text: "Nuevo",
                            icon: "resources/img/btns/nuevo.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_nuevoJugador"
                        }, {
                            xtype: "button",
                            text: "Guardar",
                            icon: "resources/img/btns/guardar.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_guardarJugador"
                        }, {
                            xtype: "button",
                            text: "Cobros",
                            icon: "resources/img/btns/cobros.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_cobrosJugador"
                        }]
                }]
        });

        me.callParent(arguments);
    }
});