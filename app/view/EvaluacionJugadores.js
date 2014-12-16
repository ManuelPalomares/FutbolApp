Ext.define('EscuelaFutbol.view.EvaluacionJugadores', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacionJugadores',
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Display',
        'Ext.grid.Panel',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.form.field.TextArea'
    ],
    viewModel: {
        type: 'evaluacion'
    },
    autoScroll: true,
    height: 550,
    width: 1000,
    layout: 'column',
    bodyPadding: 10,
    title: '',
    id: 'x_formaEvaluacionJugadores',
    items: [
        {
            xtype: 'fieldset',
            height: 232,
            width: 900,
            layout: 'column',
            collapsible: true,
            title: 'Datos de jugador',
            items: [
                {
                    xtype: 'combobox',
                    width: 872,
                    fieldLabel: 'Jugador para la evaluacion',
                    name: 'jugador',
                    displayField: 'nombre_completo',
                    tpl: Ext.create('Ext.XTemplate', '<tpl for="."><div class="x-boundlist-item"><img width="100px" height="100px" src="' + Ext.create("EscuelaFutbol.controller.HostServer").getHost() + "files/fotosjugadores/" + '{foto}"></img>{nombres} {apellidos}</div></tpl>'),
                    valueField: 'codigo',
                    queryMode: 'remote',
                    store: 'EscuelaFutbol.store.Jugadores',
                    id: 'x_jugador_evaluacion',
                    allowBlank: false
                },
                {
                    xtype: 'displayfield',
                    width: 517,
                    fieldLabel: 'Fecha de nacimiento',
                    value: 'valor',
                    name: 'fecha_nacimiento',
                    allowBlank: false

                },
                {
                    xtype: 'displayfield',
                    width: 335,
                    fieldLabel: 'Edad',
                    value: 'valor',
                    id: 'x_edadJugadorEvaluacion'
                },
                {
                    xtype: 'textfield',
                    width: 390,
                    fieldLabel: 'Email',
                    name: 'email',
                    allowBlank: false,
                    maxLength: 100,
                    vtype: 'email'

                },
                {
                    xtype: 'textfield',
                    width: 325,
                    fieldLabel: 'Colegio',
                    name: 'colegio',
                    maxLength: 100
                },
                {
                    xtype: 'textfield',
                    width: 151,
                    fieldLabel: 'Jornada',
                    name: 'jornada_colegio',
                    maxLength: 2

                },
                {
                    xtype: 'textfield',
                    width: 390,
                    fieldLabel: 'Telefono Celular',
                    maxLength: 50,
                    name: 'celular'
                },
                {
                    xtype: 'textfield',
                    width: 393,
                    fieldLabel: 'Responsable',
                    name: 'responsable',
                    allowBlank: false,
                    maxLength: 200,
                },
                {
                    xtype: 'textfield',
                    width: 390,
                    fieldLabel: 'Direccion',
                    name: 'direccion',
                    allowBlank: false,
                    maxLength: 200
                },
                {
                    xtype: 'textfield',
                    width: 390,
                    fieldLabel: 'Barrio',
                    name: 'barrio',
                    allowBlank: false,
                    maxLength: 100
                },
                {
                    xtype: 'textfield',
                    width: 390,
                    fieldLabel: 'Referido',
                    name: 'referido',
                    maxLength: 100
                },
                {
                    xtype: 'combobox',
                    width: 390,
                    fieldLabel: 'Categoria',
                    name: 'codigo_categoria',
                    displayField: 'descripcion',
                    valueField: 'codigo',
                    queryMode: 'local',
                    allowBlank: false,
                    store: Ext.create('EscuelaFutbol.store.Categorias')
                },
                {
                    xtype: 'combobox',
                    width: 390,
                    fieldLabel: 'Entrenador',
                    maxLength: 100,
                    name: 'cod_entrenador',
                    displayField: 'nombrescompletos',
                    valueField: 'codigo',
                    allowBlank: false,
                    store: Ext.create("EscuelaFutbol.store.Entrenadores")
                }
            ]
        },
        {
            xtype: 'fieldset',
            title : 'Evaluacion',
            items: [{
                    xtype: 'button',
                    text: 'Realizar Evaluacion',
                    id : 'x_realizarEvaluacion'

                }, {
                    xtype: 'combobox',
                    fieldLabel: 'Resultado de la evaluacion',
                    name: 'resultado'
                },
                {
                    xtype: 'textareafield',
                    width: 456,
                    fieldLabel: 'Otras consideraciones'
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
                    id: "x_nuevaEvaluacion"
                }, {
                    xtype: "button",
                    text: "Guardar",
                    icon: "resources/img/btns/guardar.png",
                    width: 50,
                    height: 50,
                    style: {margin: '0.2em'},
                    iconCls: "x_iconosBotonesForma",
                    iconAlign: "center",
                    id: "x_guardarEvaluacion"
                }]
        }]

});