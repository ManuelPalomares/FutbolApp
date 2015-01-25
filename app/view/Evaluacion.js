Ext.define('EscuelaFutbol.view.Evaluacion', {
    extend: 'Ext.tree.Panel',
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*',
        'Ext.selection.CellModel',
        'Ext.util.*',
        'Ext.form.*'
    ],
    alias: 'widget.evaluacionX_preguntas',
    id: 'x_grid_evaluacionPreguntas',
    xtype: 'tree-grid',
    reserveScrollbar: true,
    useArrows: true,
    rootVisible: true,
    multiSelect: true,
    singleExpand: true,
    initComponent: function () {
        this.width = '90%';
        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });

        Ext.apply(this, {
            plugins: [this.cellEditing],
            store: 'EscuelaFutbol.store.Evaluacion',
            tbar :[{
                    
                    text: "Guardar",
                    icon: "resources/img/btns/guardar.png",
                    width: 50,
                    height: 50,
                    style: {margin: '0.2em'},
                    iconCls: "x_iconosBotonesForma",
                    iconAlign: "center",
                    id: "x_guardarRespuestasEval"
            }],
            columns: [{
                    xtype: 'treecolumn',
                    text: 'Aspecto a evaluar',
                    flex: 2,
                    width: '40%',
                    sortable: true,
                    dataIndex: 'descripcion_detalle'
                }, {
                    header: 'Calificacion Aspecto',
                    dataIndex: 'respuesta_aspecto',
                    width: '10%',
                    editor: new Ext.form.field.ComboBox({
                        typeAhead: true,
                        triggerAction: 'all',
                        store: [
                            ['SI', 'SI'],
                            ['CD', 'Con dificulta'],
                            ['NA', 'No aplica']
                        ]
                    })
                },
                {
                    header: 'Respuesta texto',
                    width: '20%',
                    
                    dataIndex: 'respuesta_texto',
                    editor: {
                        xtype: 'textareafield',
                        name: 'message',
                        anchor: '100%'
                    }
                },
                {
                    header: 'Respuesta si no',
                    dataIndex: 'respuesta_si_no',
                    width: '10%',
                    editor: new Ext.form.field.ComboBox({
                        typeAhead: true,
                        triggerAction: 'all',
                        store: [
                            ['SI', 'SI'],
                            ['NO', 'NO']
                        ]
                    })
                }
            ]
        });
        this.callParent();
    }
});