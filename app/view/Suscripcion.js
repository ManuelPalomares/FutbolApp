Ext.define('MyApp.view.EscuelaFutbol.view.Suscriptores', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularioSuscriptores',

    requires: [
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldSet'
    ],

    height: 433,
    id: 'x_formularioSuscriptores',
    width: 651,
    layout: 'column',
    bodyPadding: 10,
    title: 'Datos del Suscriptor o Responsable',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: 'Fecha Inscripción',
                    name: 'fecha_ingreso',
                    editable: false,
                    format: 'Y/d/m'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Código Suscriptor',
                    name: 'codigo',
                    maxLength: 15,
                    editable: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Tipo Documento:',
                    name: 'tipo_documento',
                    store: 'TipoDocumento'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Número documento:',
                    name: 'numero_documento',
                    maxLength: 20
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nombres:',
                    name: 'nombres',
                    maxLength: 50
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Apellidos:',
                    name: 'apellidos',
                    maxLength: 50
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Telefono Fijo:',
                    name: 'telefono',
                    maxLength: 20
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Celular:',
                    name: 'celular',
                    maxLength: 20
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email:',
                    name: 'email',
                    maxLength: 100
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Género:',
                    name: 'genero',
                    maxLength: 1,
                    store: 'genero'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Estado:',
                    name: 'estado',
                    maxLength: 1
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Parentesco:',
                    name: 'parentesco'
                },
                {
                    xtype: 'fieldset',
                    layout: 'column',
                    collapsible: true,
                    title: 'Datos del responsable 2',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nombres Responsable 2:',
                            name: 'nombres2',
                            maxLength: 50
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Apellidos Responsable 2:',
                            name: 'apellidos2',
                            maxLength: 50
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Tipo Documento Responsable 2:',
                            name: 'tipo_documento2',
                            store: 'TipoDocumento'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Número documento Responsable 2:',
                            name: 'numero_documento2',
                            maxLength: 20
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Parentesco Responsable 2:',
                            name: 'parentesco2'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});