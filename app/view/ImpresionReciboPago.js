Ext.define('EscuelaFutbol.view.ImpresionReciboPago', {
   extend: 'Ext.form.Panel',
   alias : "widget.impreReciboPag",
   requires: [
       'Ext.form.field.ComboBox',
       'Ext.button.Button',
       'Ext.grid.Panel',
       'Ext.grid.column.Date',
       'Ext.grid.View'
   ],

   height: 433,
   width: 688,
   bodyPadding: 10,
   title: 'Imprimir Recibos de Pago',

   initComponent: function() {
       var me = this;

       Ext.applyIf(me, {
           items: [
               {
                   xtype: 'container',
                   items: [
                       {
                           xtype: 'combobox',
                           fieldLabel: 'Categoría'
                       },
                       {
                           xtype: 'combobox',
                           fieldLabel: 'Cliente'
                       },
                       {
                           xtype: 'button',
                           text: 'Buscar'
                       }
                   ]
               },
               {
                   xtype: 'container',
                   items: [
                       {
                           xtype: 'gridpanel',
                           itemId: 'mygridpanel',
                           title: 'Fechas de los meses recaudados',
                           columns: [
                               {
                                   xtype: 'datecolumn',
                                   dataIndex: 'date',
                                   text: 'Fecha'
                               }
                           ]
                       },
                       {
                           xtype: 'button',
                           width: 100,
                           text: 'Generar Recibo'
                       }
                   ]
               }
           ]
       });

       me.callParent(arguments);
   }

});