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
    height: 540,
    id: 'x_formularioJugadores',
    width: 1000,
    layout: 'column',
    bodyPadding: 10,
    //title: 'Ficha de Inscripción del jugador',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {xtype: 'panel',
                    bodyPadding: 2,
                    layout: 'hbox',
                    height: '100%',
                    width: 990,
                    //collapsible: true,
                    title: 'Datos del Jugador',
                    items: [
                        {
                            xtype: 'container',
                            width: '65%',
                            items: [
                                ,
                                {
                                    xtype: 'fieldcontainer',
                                    height: 150,
                                    width: 600,
                                    fieldLabel: '',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: 150,
                                            width: 130,
                                            src: 'resources/img/foto_jugadores.png'
                                        },
                                        {
                                            xtype: 'button',
                                            text: 'Subir Foto',
                                            style: {marginTop: '130px'}
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            width: 300,
                                            height: 150,
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
                                                    width: 200
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    width: 150,
                                                    fieldLabel: 'ID Jugador',
                                                    name: 'codigo',
                                                    maxLength: 11,
                                                    editable: false,
                                                    id: 'x_codigoJugador',
                                                    hideTrigger: true,
                                                    margin: 3
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    width: 230,
                                                    fieldLabel: 'Estado:',
                                                    name: 'estado',
                                                    store: 'EscuelaFutbol.store.Estado',
                                                    displayField: 'descripcion',
                                                    valueField: 'codigo',
                                                    queryMode: 'local',
                                                    allowBlank: false,
                                                    value: 'A',
                                                    margin: 3
                                                }]}

                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    height: 600,
                                    width: 630,
                                    fieldLabel: '',
                                    layout: 'column',
                                    items: 
                                    [
                                        {
                                            xtype: 'combobox',
                                            //margin: 3,
                                            width: 220,
                                            fieldLabel: 'Tipo Doc:',
                                            name: 'tipo_documento',
                                            displayField: 'descripcion',
                                            store: 'EscuelaFutbol.store.TipoDocumento',
                                            valueField: 'codigo',
                                            queryMode: 'local',
                                            id: 'x_tipoDocumentoJugador',
                                            style: {marginTop: '20px', marginLeft: '3px'},
                                            labelWidth: 70
                                        },
                                        {
                                            xtype: 'textfield',
                                            style: {marginTop: '20px', marginLeft: '10px'},
                                            width: 220,
                                            fieldLabel: 'Documento:',
                                            labelWidth: 70,
                                            name: 'doc_identidad',
                                            maxLength: 50
                                        },
                                        {
                                            xtype: 'datefield',
                                            //margin: 3,
                                            width: 160,
                                            style: {marginTop: '20px', marginLeft: '10px'},
                                            fieldLabel: 'Fecha Exp:',
                                            labelWidth: 60,
                                            format: 'Y/d/m',
                                            name: 'fecha_expedicion'
                                        },
                                        {
                                            xtype: 'textfield',
                                            style: {marginTop: '5px', marginLeft: '3px'},
                                            //margin: 3,
                                            width: 305,
                                            fieldLabel: 'Nombres:',
                                            name: 'nombres',
                                            labelWidth: 70,
                                            maxLength: 100
                                        },
                                        {
                                            xtype: 'textfield',
                                            //margin: 3,
                                            width: 305,
                                            fieldLabel: 'Apellidos:',
                                            name: 'apellidos',
                                            labelWidth: 65,
                                            maxLength: 100
                                            ,style: {marginTop: '5px',marginLeft: '10px'}
                                        },
                                        {
                                            xtype: 'datefield',
                                            //margin: 3,
                                            width: 220,
                                            fieldLabel: 'Fec Nac:',
                                            format: 'Y/d/m',
                                            labelWidth: 70,
                                            name: 'fecha_nacimiento'                     
                                            ,style: {marginTop: '5px',marginLeft: '3px'}
                                        },
                                        {
                                            xtype: 'combobox',
                                            //margin: 3,
                                            width: 390,
                                            fieldLabel: 'Lugar Nac:',
                                            labelWidth: 70,
                                            name: 'codigo_lugar_nacimiento',
                                            displayField: 'descripcion',
                                            valueField: 'codigo',
                                            queryMode: 'local',
                                            store: 'EscuelaFutbol.store.Ciudades'
                                            ,style: {marginTop: '5px',marginLeft: '10px'}
                                        },
                                        {
                                            xtype: 'combobox',
                                            //margin: 3,
                                            width: 220,
                                            fieldLabel: 'Tipo Sangre:',
                                            labelWidth: 70,
                                            name: 'tipo_sangre',
                                            store: 'EscuelaFutbol.store.TipoSangre',
                                            displayField: 'descripcion',
                                            valueField: 'codigo',
                                            queryMode: 'local'
                                            ,style: {marginTop: '5px',marginLeft: '3px'}
                                        },
                                        {
                                            xtype: 'textfield',
                                            //margin: 3,
                                            width: 390,
                                            fieldLabel: 'Dirección',
                                            name: 'direccion',
                                            maxLength: 200,
                                            labelWidth: 70
                                            ,style: {marginTop: '5px',marginLeft: '10px'}
                                        },
                                        {
                                            xtype: 'textfield',
                                            //margin: 3,
                                            width: 305,
                                            fieldLabel: 'Barrio:',
                                            name: 'barrio',
                                            maxLength: 100,
                                            labelWidth: 70
                                            ,style: {marginTop: '5px', marginLeft: '3px'}
                                        },
                                        {
                                            xtype: 'combobox',
                                            style: {marginTop: '5px',marginLeft: '10px'},
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
                                            ,style: {marginTop: '5px',marginLeft: '10px'}
                                        },
                                        {
                                            xtype: 'textfield',
                                            //margin: 3,
                                            width: 220,
                                            fieldLabel: 'Celular:',
                                            labelWidth: 70,
                                            name: 'celular',
                                            maxLength: 50
                                            ,style: {marginTop: '5px',marginLeft: '3px'}
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
                                            ,style: {marginTop: '5px',marginLeft: '3px'}
                                        },
                                        {
                                            xtype: 'textfield',
                                            //margin: 3,
                                            width: 180,
                                            fieldLabel: 'Grado:',
                                            labelWidth: 50,
                                            name: 'grado',
                                            maxLength: 50
                                            ,style: {marginTop: '5px',marginLeft: '10px'}
                                        },                                       
                                        {
                                            xtype: 'textfield',
                                            //margin: 3,
                                            width: 305,
                                            fieldLabel: 'Email:',
                                            name: 'email',
                                            maxLength: 100,
                                            vtype: 'email',
                                            labelWidth: 70,
                                            style: {marginTop: '5px', marginLeft: '3px'}
                                        },
                                        {
                                            xtype: 'combobox',
                                            //margin: 3,
                                            width: 305,
                                            fieldLabel: 'Categoría',
                                            name: 'codigo_categoria',
                                            displayField: 'descripcion',
                                            valueField: 'codigo',
                                            queryMode: 'local',
                                            store: 'EscuelaFutbol.store.Categorias',
                                            labelWidth: 70
                                            ,style: {marginTop: '5px',marginLeft: '10px'}
                                        },
                                        {
                                            xtype: 'combobox',
                                            //margin: 3,
                                            width: 430,
                                            fieldLabel: 'Suscriptor:',
                                            name: 'codigo_suscriptor',
                                            displayField: 'nombrescompletos',
                                            valueField: 'codigo',
                                            queryMode: 'local',
                                            store: 'EscuelaFutbol.store.Suscriptores',
                                            labelWidth: 70,
                                            style: {marginTop: '5px', marginLeft: '3px'}
                                        }
                                    ]
                                }

                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            id: 'x_grillaJugadores',
                            height: 540,
                            width: '35%',//800,
                            title: 'Listado de Jugadores',
                            scroll: true,
                            store: Ext.create('EscuelaFutbol.store.Jugadores'),
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
                                    width: 300
                                }
                            ],
                            tbar: [{
                                    xtype: 'combobox',
                                    fieldLabel: 'Categoria',
                                    queryMode: 'local',
                                    //name: 'codigo_categoria',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    store: 'EscuelaFutbol.store.Categorias'
                                }, '->',
                                {
                                    xtype: 'button',
                                    text: 'Consultar'                                   
                                }]
                            
                        }]
                },
            ],
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
                        }/*, {
                         xtype: "button",
                         text: "Eliminar",
                         icon: "resources/img/btns/eliminar.png",
                         width: 50,
                         height: 50,
                         style: {margin: '0.2em'},
                         iconCls: "x_iconosBotonesForma",
                         iconAlign: "center",
                         id: "x_eliminarJugador"
                         }*/]
                }]
        });

        me.callParent(arguments);
    }

});