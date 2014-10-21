Ext.define('EscuelaFutbol.view.CitacionDeportiva', {
    extend: 'Ext.form.Panel',
    alias: 'widget.citacionDeportiva',
    id: "x_formularioCitaDeportiva",
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.form.field.HtmlEditor',
        'Ext.grid.Panel',
        'Ext.grid.column.Template',
        'Ext.XTemplate'
    ],
    items: [
        {xtype: 'panel',
            bodyPadding: 2,
            layout: 'hbox',
            height: '100%',
            width: 900,
            collapsible: true,
            title: 'Citas deportivas',
            items: [
                {
                    xtype: 'container',
                    width: '50%',
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Codigo de la cita deportiva',
                            name: 'codigo',
                            maxLength: 15,
                            editable: false,
                            hideTrigger: true,
                            id: 'x_codigoCitaDeportiva' //actualizar o guardar 

                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            width: 400,
                            fieldLabel: 'Titulo del evento',
                            name: 'titulo_evento',
                            maxLength: 200,
                            id: 'x_tituloCita',
                            allowBlank: false
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'table',
                                columns: 2,
                                tdAttrs: {style: 'padding: 0.1px;'}
                            },
                            items: [
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Fecha inicio evento',
                                    name: 'fecha_inicio',
                                    format: 'Y/m/d',
                                    width: 200,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'timefield',
                                    fieldLabel: 'Hora Inicio',
                                    width: 200,
                                    increment: 30,
                                    format: 'H:i',
                                    name: 'hora1',
                                    style: {
                                        'margin-left': '0.5em'
                                    }
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Fecha fin del evento',
                                    name: 'fecha_fin',
                                    format: 'Y/m/d',
                                    width: 200,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'timefield',
                                    fieldLabel: 'Hora Final',
                                    width: 200,
                                    increment: 30,
                                    format: 'H:i',
                                    name: 'hora2',
                                    style: {
                                        'margin-left': '0.5em'
                                    }
                                }

                            ]
                        },
                        {
                            xtype: 'combobox',
                            style: {
                                'margin-left': '0.5em'
                            },
                            width: 200,
                            fieldLabel: 'Estado del evento',
                            name: 'estado_evento',
                            store: Ext.create("EscuelaFutbol.store.EstadosEventos"),
                            displayField: "descripcion",
                            valueField: "codigo",
                            queryMode: 'local',
                            allowBlank: false
                        }, {
                            xtype: "button",
                            text: "Descripcion del evento",
                            id: "x_btn_descripcion_evento",
                            style: {'margin': '10px'}
                        }, {
                            xtype: 'textfield',
                            name: 'descripcion_evento',
                            maxLength : 4000,
                            id : 'x_descripcionEvento',
                            hidden : true,
                            allowBlank: false  // requires a non-empty value
                        }
                        
                    ]
                },
                {
                    xtype: 'container',
                    width: '50%',
                    items: [
                        {
                            xtype: 'gridpanel',
                            height: 350,
                            id: 'x_citasDeportivasGrid',
                            store: 'EscuelaFutbol.store.Eventos',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: '50%',
                                    dataIndex: 'titulo_evento',
                                    text: 'Evento'
                                },
                                {
                                    xtype: 'templatecolumn',
                                    tpl: [
                                        '{fecha_inicio} - {fecha_fin}'
                                    ],
                                    width: '50%',
                                    text: 'Fechas Evento'
                                }
                            ]
                        }
                    ]
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
                    id: "x_NuevaCita"
                }, {
                    xtype: "button",
                    text: "Guardar",
                    icon: "resources/img/btns/guardar.png",
                    width: 50,
                    height: 50,
                    style: {margin: '0.2em'},
                    iconCls: "x_iconosBotonesForma",
                    iconAlign: "center",
                    id: "x_guardarCita"
                }, {
                    xtype: "button",
                    text: "Eliminar",
                    icon: "resources/img/btns/eliminar.png",
                    width: 50,
                    height: 50,
                    style: {margin: '0.2em'},
                    iconCls: "x_iconosBotonesForma",
                    iconAlign: "center",
                    id: "x_eliminarCita"
                }]
        }]

});