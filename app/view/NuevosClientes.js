Ext.define('EscuelaFutbol.view.NuevosClientes', {
    extend: 'Ext.form.Panel',
    alias: 'widget.nuevosClientes',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldSet'
        
    ],
    //height: 497,
    id: 'x_formularioSuscriptores',
    width: 900,
    layout: 'column',
    bodyPadding: 10,
    title: 'Datos del Suscriptor o Responsable',
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
                            editable :false,
                            format: 'Y/d/m',
                            value  : new Date(),
                            hideTrigger: true,
                            disabled : true

                        },
                        {
                            xtype: 'numberfield',
                            style: {
                                marginTop: '3px',
                                marginLeft: '20px'
                            },
                            width: 200,
                            fieldLabel: 'Suscriptor',
                            name: 'codigo',
                            maxLength: 15,
                            editable: false,
                            id: 'x_codigoSuscriptor',
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
                            value : 'P',
                            editable : false
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    height: 200,
                    style: {
                        marginTop: '10px',
                        marginLeft: '10px'
                    },
                    width: 870,
                    layout: 'column',
                    title: 'Datos Responsable Principal',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            height: 30,
                            style: {
                                marginTop: '10px'
                            },
                            width: 866,
                            layout: 'column',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 300,
                                    fieldLabel: 'Parentesco:',
                                    name: 'parentesco',
                                    store: 'EscuelaFutbol.store.Parentesco',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    queryMode: 'local',
                                    id: 'x_parentescoClienteNuevo',
                                    allowBlank: false
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
                                    width: 300,
                                    fieldLabel: 'Tipo Documento:',
                                    name: 'tipo_documento',
                                    displayField: 'descripcion',
                                    store: 'EscuelaFutbol.store.TipoDocumento',
                                    valueField: 'codigo',
                                    queryMode: 'local',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    style: {
                                        marginLeft: '113px',
                                        marginTop: '3px'
                                    },
                                    width: 350,
                                    fieldLabel: 'Documento:',
                                    name: 'numero_documento',
                                    maxLength: 20,
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 60,
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
                                    maxLength: 50,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 410,
                                    fieldLabel: 'Apellidos:',
                                    name: 'apellidos',
                                    maxLength: 50,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 300,
                                    fieldLabel: 'Teléfono Fijo:',
                                    name: 'telefono',
                                    maxLength: 20
                                },
                                {
                                    xtype: 'textfield',
                                    style: {
                                        marginTop: '3px',
                                        marginLeft: '113px'
                                    },
                                    width: 350,
                                    fieldLabel: 'Celular:',
                                    name: 'celular',
                                    maxLength: 20
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
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 410,
                                    fieldLabel: 'Email:',
                                    name: 'email',
                                    maxLength: 100,
                                    allowBlank: false,
                                    vtype : 'email'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    height: 165,
                    style: {
                        marginTop: '2px',
                        marginLeft: '10px'
                    },
                    width: 870,
                    layout: 'column',
                    title: 'Datos del Segundo Responsable',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            height: 30,
                            style: {
                                marginTop: '10px'
                            },
                            width: 866,
                            layout: 'column',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 300,
                                    fieldLabel: 'Parentesco:',
                                    name: 'parentesco2',
                                    store: 'EscuelaFutbol.store.Parentesco',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    queryMode: 'local'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 30,
                            width: 866,
                            layout: 'column',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: 3,
                                    width: 300,
                                    fieldLabel: 'Tipo Documento:',
                                    name: 'tipo_documento2',
                                    store: 'EscuelaFutbol.store.TipoDocumento',
                                    displayField: 'descripcion',
                                    valueField: 'codigo',
                                    queryMode: 'local'
                                },
                                {
                                    xtype: 'textfield',
                                    style: {
                                        marginLeft: '113px',
                                        marginTop: '3px'
                                    },
                                    width: 350,
                                    fieldLabel: 'Documento:',
                                    name: 'numero_documento2',
                                    maxLength: 20
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 60,
                            width: 866,
                            layout: 'column',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 410,
                                    fieldLabel: 'Nombres:',
                                    name: 'nombres2',
                                    maxLength: 50
                                },
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 410,
                                    fieldLabel: 'Apellidos:',
                                    name: 'apellidos2',
                                    maxLength: 50
                                },
                                {
                                    xtype: 'textfield',
                                    margin: 3,
                                    width: 300,
                                    fieldLabel: 'Celular:',
                                    name: 'celular2'
                                },
                                {
                                    xtype: 'textfield',
                                    style: {
                                        marginLeft: '113px',
                                        marginTop: '3px'
                                    },
                                    width: 410,
                                    fieldLabel: 'Email:',
                                    name: 'email2'
                                }
                            ]
                        }
                    ]
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
                            id: "x_NuevoCliente"
                        }, {
                            xtype: "button",
                            text: "Guardar",
                            icon: "resources/img/btns/guardar.png",
                            width: 50,
                            height: 50,
                            style: {margin: '0.2em'},
                            iconCls: "x_iconosBotonesForma",
                            iconAlign: "center",
                            id: "x_guardarNuevoCliente"
                        }]
                }]
        });

        me.callParent(arguments);
    }

});
