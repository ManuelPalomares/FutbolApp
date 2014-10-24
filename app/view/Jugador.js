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
    height: 600,
    id: 'x_formularioJugadores',
    width: 900,
    layout: 'column',
    bodyPadding: 10,
    title: 'Ficha de Inscripción del jugador',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldcontainer',
                    height: 30,
                    style: {
                        marginTop: '2px',
                        marginLeft: '20px'
                    },
                    width: 866,
                    layout: 'column',
                    fieldLabel: '',
                    items: [
                        {
                            xtype: 'datefield',
                            margin: 3,
                            fieldLabel: 'Fecha Ingreso',
                            name: 'fecha_ingreso',
                            editable: false,
                            format: 'Y/d/m',
                            value: new Date(),
                            hideTrigger: true,
                            disabled: true
                        },
                        {
                            xtype: 'numberfield',
                            style: {
                                marginTop: '3px',
                                marginLeft: '20px'
                            },
                            width: 200,
                            fieldLabel: 'ID Jugador',
                            name: 'codigo',
                            maxLength: 11,
                            editable: false,
                            id: 'x_codigoJugador',
                            hideTrigger: true
                        },
                        {
                            xtype: 'combobox',
                            style: {
                                marginTop: '3px',
                                marginLeft: '20px'
                            },
                            width: 250,
                            fieldLabel: 'Estado:',
                            name: 'estado',
                            store: 'EscuelaFutbol.store.Estado',
                            displayField: 'descripcion',
                            valueField: 'codigo',
                            queryMode: 'local',
                            allowBlank: false,
                            value: 'A'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    height: 280,
                    style: {
                        marginTop: '10px',
                        marginLeft: '10px'
                    },
                    width: 870,
                    layout: 'column',
                    title: 'Datos del Jugador',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            height: 130,
                            width: 870,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'image',
                                    height: 120,
                                    width: 110,
                                    src: 'resources/img/foto_jugadores.png'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 30,
                            width: 870,
                            layout: 'column',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 280,
                                    fieldLabel: 'Tipo Documento:',
                                    name: 'tipo_documento',
                                    displayField: 'descripcion',
                                    store: 'EscuelaFutbol.store.TipoDocumento',
                                    valueField: 'codigo',
                                    queryMode: 'local',
                                    id: 'x_tipoDocumentoJugador'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 280,
                                    fieldLabel: 'Documento:',
                                    labelWidth: 80,
                                    name: 'doc_identidad',
                                    maxLength: 50
                                },
                                {
                                    xtype: 'datefield',
                                    margin: 3,
                                    width: 250,
                                    fieldLabel: 'Fecha Exp:',
                                    labelWidth: 80,
                                    format: 'Y/d/m',
                                    name: 'fecha_expedicion'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 200,
                            style: {
                                marginTop: '5px'
                            },
                            width: 866,
                            layout: 'column',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 410,
                                    fieldLabel: 'Nombres:',
                                    name: 'nombres',
                                    maxLength: 100
                                },
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 405,
                                    fieldLabel: 'Apellidos:',
                                    name: 'apellidos',
                                    maxLength: 100
                                },
                                {
                                    xtype: 'datefield',
                                    margin: 3,
                                    width: 280,
                                    fieldLabel: 'Fec Nacimiento:',
                                    format: 'Y/d/m',
                                    name: 'fecha_nacimiento'
                                },
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 280,
                                    fieldLabel: 'Lugar Nac:',
                                    labelWidth: 80,
                                    name: 'codigo_lugar_nacimiento',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    queryMode: 'local',
                                    store: 'EscuelaFutbol.store.Ciudades'
                                },
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 250,
                                    fieldLabel: 'Tipo Sangre:',
                                    labelWidth: 80,
                                    name: 'tipo_sangre',
                                    store: 'EscuelaFutbol.store.TipoSangre',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    queryMode: 'local'
                                },
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 410,
                                    fieldLabel: 'Categoría',
                                    name: 'codigo_categoria',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    queryMode: 'local',
                                    store: 'EscuelaFutbol.store.Categorias'
                                },
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 405,
                                    fieldLabel: 'Suscriptor:',
                                    name: 'codigo_suscriptor',
                                    displayField: 'nombrescompletos',
                                    valueField: 'codigo',
                                    queryMode: 'local',
                                    store: 'EscuelaFutbol.store.Suscriptores'
                                }
                            ]
                        }

                    ]
                },
                {
                    xtype: 'gridpanel',
                    id : 'x_grillaJugadores',
                    height: 700,
                    width : 800,
                    title: 'Listado de Jugadores',
                    scroll : true,
                    store : Ext.create('EscuelaFutbol.store.Jugadores'),
                    columns: [{
                            xtype: 'gridcolumn',
                            text: 'Documento de Identificacion',
                            dataIndex: 'doc_identidad',
                            width : 200
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'Apellidos y Nombres',
                            dataIndex: 'nombre_completo',
                            width: 400
                        }
                    ],
                     tbar: [{
                     xtype: 'combobox',
                     fieldLabel: 'Categoria'
                     }, '->', {
                     xtype: 'button',
                     text: 'Consultar'
                     }]
                }
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