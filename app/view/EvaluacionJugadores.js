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
                    
                    store: Ext.create('EscuelaFutbol.store.Jugadores')
                },
                {
                    xtype: 'displayfield',
                    width: 517,
                    fieldLabel: 'Fecha de nacimiento',
                    value: 'valor'
                },
                {
                    xtype: 'displayfield',
                    width: 335,
                    fieldLabel: 'Edad',
                    value: 'valor'
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
                    name: 'colegio'
                },
                {
                    xtype: 'combobox',
                    width: 151,
                    fieldLabel: 'Jornada'
                },
                {
                    xtype: 'textfield',
                    width: 390,
                    fieldLabel: 'Telefono Celular',
                    minLength: 20
                },
                {
                    xtype: 'textfield',
                    width: 393,
                    fieldLabel: 'Responsable',
                    name: 'responsable',
                    allowBlank: false,
                    maxLength: 200
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
                    name: 'categoria',
                    maxLength: 100
                },
                {
                    xtype: 'combobox',
                    width: 390,
                    fieldLabel: 'Entrenador',
                    name: 'entrenador',
                    maxLength: 100
                }
            ]
        },
        {
            xtype: 'gridpanel',
            height: 500,
            width: 900,
            title: 'Evaluacion',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 554,
                    dataIndex: 'string',
                    text: 'Aspecto personal'
                },
                {
                    xtype: 'booleancolumn',
                    dataIndex: 'bool',
                    text: 'Boolean'
                }
            ]
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Resultado de la evaluacion',
            name: 'resultado'
        },
        {
            xtype: 'textareafield',
            width: 456,
            fieldLabel: 'Otras consideraciones'
        }
    ]

});