Ext.define('EscuelaFutbol.view.NuevosClientes', {
    extend: 'Ext.form.Panel',
    alias: 'widget.nuevosClientes',
    id: 'x_formularioNuevosClientes',
    requires: [
        'Ext.form.field.Date',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Time'
    ],
    height: 550,
    width: 950,
    layout: 'anchor',
    bodyPadding: 10,
    title: '',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    width: 600,
                    title: '',
                    layout : 'column',
                    items: [
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Fecha Registro',
                            editable: false,
                            hideTrigger: true
                        },{
                            xtype : 'numberfield',
                            fieldLabel : 'Codigo Jugador',
                            editable : false,
                            name : 'codigo_jugador',
                            id: 'x_codigoJugador',
                            hideTrigger: true,
                            style : {'margin-left':'0.5em'}
                        },{
                            xtype : 'numberfield',
                            hidden : true,
                            name  : 'codigo_cita',
                            id    : 'x_codigoCita'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    height: 90,
                    layout: 'column',
                    title: 'Datos personales',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 350,
                            fieldLabel: 'Nombres',
                            id: 'x_codigoNombreJugador',
                            name: 'nombres',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            width: 350,
                            fieldLabel: 'Apellidos',
                            name: 'apellidos',
                            allowBlank: false,
                            style: {'margin-left': '0.5em'}
                        },
                        {
                            xtype: 'datefield',
                            width: 350,
                            fieldLabel: 'Fecha Nacimiento',
                            labelWidth: 200,
                            id : 'x_fecha_nacimiento',
                            name: 'fecha_nacimiento',
                            format : 'Y/m/d',
                            allowBlank: false
                        },
                        {
                            xtype: 'numberfield',
                            width: 350,
                            fieldLabel: 'Edad',
                            name: 'edad',
                            id : 'x_edad',
                            editable: false,
                            hideTrigger: true,
                            style: {'margin-left': '0.5em'}
                        },
                        {
                            xtype: 'textfield',
                            width: 350,
                            fieldLabel: 'Email',
                            name: 'email',
                            allowBlank: false,
                            vtype: 'email'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    height: 90,
                    title: 'Entrenamientos',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 350,
                            fieldLabel: 'Categoria',
                            name: 'categoria',
                            allowBlank: false,
                            displayField: 'descripcion',
                            valueField: 'codigo',
                            queryMode: 'local',
                            id : 'x_categoriaClienteNuevo',
                            store: Ext.create('EscuelaFutbol.store.Categorias')

                        },
                        {
                            xtype: 'checkboxgroup',
                            width: 700,
                            fieldLabel: 'Dias',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Lunes',
                                    id : 'x_LUNES',
                                    name: 'dia'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Martes',
                                    id : 'x_MARTES',
                                    name: 'dia'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Miercoles',
                                    id : 'x_MIERCOLES',
                                    name: 'dia'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Jueves',
                                    id : 'x_JUEVES',
                                    name: 'dia'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Viernes',
                                    id : 'x_VIERNES',
                                    name: 'dia'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Sabado',
                                    id : 'x_SABADO',
                                    name: 'dia'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'Domingo',
                                    id : 'x_DOMINGO',
                                    name: 'dia'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    height: 80,
                    width: 600,
                    layout: 'column',
                    title: 'Evaluacion deportiva',
                    items: [
                        {
                            xtype: 'datefield',
                            width: 350,
                            fieldLabel: 'Fecha Evaluacion',
                            name: 'fecha_evaluacion',
                            format : 'Y/m/d',
                            allowBlank: false
                            
                        },
                        {
                            xtype: 'timefield',
                            width: 200,
                            fieldLabel: 'Hora Evaluacion',
                            style: {'margin-left': '0.5em'},
                            name: 'hora',
                            format: 'H:i',
                            increment: 30,
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            width: 350,
                            fieldLabel: 'Entrenador',
                            name : 'cod_entrenador',
                            displayField : 'nombrescompletos',
                            valueField   : 'codigo',
                            allowBlank: false,
                            store : Ext.create("EscuelaFutbol.store.Entrenadores")
                            
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    height: 100,
                    width: 600,
                    title: 'Inscripcion',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Valor Inscripcion',
                            name: 'inscripcion'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Mensualidad',
                            name: 'mensualidad'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Transporte',
                            name: 'transporte'
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    width: 400,
                    fieldLabel: 'Atendido por ',
                    valueField : 'codigo',
                    displayField : 'nombre',
                    store: Ext.create("EscuelaFutbol.store.Usuarios"),
                    name: 'usuario_atencion',
                    allowBlank: false
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

/*Ext.define('EscuelaFutbol.view.NuevosClientes', {
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
 
 initComponent: function () {
 var me = this;
 
 Ext.applyIf(me, {
 items: [
 {
 xtype: 'fieldset',
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
 xtype: 'fieldset',
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
 xtype: 'fieldset',
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
 xtype: 'fieldset',
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
 xtype: 'fieldset',
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
 xtype: 'fieldset',
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
 xtype: 'fieldset',
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
 xtype: 'fieldset',
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
 */