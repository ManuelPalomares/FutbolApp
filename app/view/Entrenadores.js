Ext.define('EscuelaFutbol.view.Entrenadores', {
    extend: 'Ext.form.Panel',
    alias: "widget.fichaEntrenadores",
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldSet',
        'Ext.grid.Panel',
        'Ext.grid.column.Template',
        'Ext.XTemplate'
    ],
    height: 400,
    id: 'x_formularioEntrenadores',
    width: 1000,
    layout: 'column',
    bodyPadding: 10,
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
                    title: 'Datos del Entrenador',
                    items: [
                        {
                            xtype: 'container',
                            width: '65%',
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    height: 50,
                                    width: 600,
                                    fieldLabel: '',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            width: 300,
                                            height: 150,
                                            fieldLabel: '',
                                            layout: 'column',
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    width: 150,
                                                    fieldLabel: 'ID',
                                                    name: 'codigo',
                                                    maxLength: 11,
                                                    editable: false,
                                                    id: 'x_codigoEntrenadorForma',
                                                    hideTrigger: true,
                                                    //margin: 3
                                                    style: {marginTop: '20px', marginLeft: '3px'},
                                                    labelWidth: 70
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    width: 220,
                                                    fieldLabel: 'Estado:',
                                                    name: 'estado',
                                                    store: 'EscuelaFutbol.store.Estado',
                                                    displayField: 'descripcion',
                                                    valueField: 'codigo',
                                                    queryMode: 'local',
                                                    allowBlank: false,
                                                    value: 'A',
                                                    margin: 3,
                                                    labelWidth: 70
                                                }]
                                        }

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
                                                    id: 'x_tipoDocumentoEntrenador',
                                                    style: {marginTop: '20px', marginLeft: '3px'},
                                                    labelWidth: 70,
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    style: {marginTop: '20px', marginLeft: '10px'},
                                                    width: 220,
                                                    fieldLabel: 'Documento:',
                                                    labelWidth: 70,
                                                    name: 'documento_identidad',
                                                    maxLength: 50,
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    style: {marginTop: '5px', marginLeft: '3px'},
                                                    //margin: 3,
                                                    width: 305,
                                                    fieldLabel: 'Nombres:',
                                                    name: 'nombres',
                                                    labelWidth: 70,
                                                    maxLength: 100,
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    //margin: 3,
                                                    width: 305,
                                                    fieldLabel: 'Apellidos:',
                                                    name: 'apellidos',
                                                    labelWidth: 65,
                                                    allowBlank: false,
                                                    maxLength: 100
                                                    , style: {marginTop: '5px', marginLeft: '10px'}
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    //margin: 3,
                                                    width: 220,
                                                    fieldLabel: 'Fec Nac:',
                                                    format: 'Y/d/m',
                                                    labelWidth: 70,
                                                    allowBlank: false,
                                                    name: 'fecha_nacimiento'
                                                    , style: {marginTop: '5px', marginLeft: '3px'}
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    //margin: 3,
                                                    width: 390,
                                                    fieldLabel: 'Dirección',
                                                    name: 'direccion',
                                                    maxLength: 200,
                                                    labelWidth: 70

                                                    , style: {marginTop: '5px', marginLeft: '10px'}
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
                                                    width: 390,
                                                    fieldLabel: 'Email:',
                                                    name: 'email',
                                                    maxLength: 100,
                                                    vtype: 'email',
                                                    labelWidth: 70,
                                                    style: {marginTop: '5px', marginLeft: '10px'}
                                                }
                                            ]
                                }

                            ]
                        },{
                            xtype: 'gridpanel',
                            id: 'x_grillaEntrenadores',
                            height: 350,
                            width: '35%',
                            title: 'Listado de Entrenadores',
                            scroll: true,
                            store: 'EscuelaFutbol.store.EntrenadoresGrilla',
                            columns: [{
                                    xtype: 'gridcolumn',
                                    text: 'Identificación',
                                    dataIndex: 'documento_identidad',
                                    width: 100
                                },
                                {
                                    xtype: 'gridcolumn',
                                    text: 'Apellidos y Nombres',
                                    dataIndex: 'nombre_completo',
                                    width: 220
                                }
                            ],
                            tbar: [{
                                    xtype: 'combobox',
                                    fieldLabel: 'Categoria',
                                    queryMode: 'local',
                                    id: 'x_comboCategoriaForma',
                                    //name: 'codigo_categoria',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    store: Ext.create('EscuelaFutbol.store.Categorias')
                                }],
                            dockedItems: [{
                                    xtype: 'pagingtoolbar',
                                    store: 'EscuelaFutbol.store.EntrenadoresGrilla',
                                    dock: 'bottom',
                                    displayInfo: false
                                }]
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
                            id: "x_nuevoEntrenador"
                        }, {
                            xtype: "button",
                            text: "Guardar",
                            icon: "resources/img/btns/guardar.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_guardarEntrenador"
                        }]
                }]
        });

        me.callParent(arguments);
    }
});

