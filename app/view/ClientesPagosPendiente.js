Ext.define('EscuelaFutbol.view.ClientesPagosPendiente', {
   extend: 'Ext.form.Panel',

   requires: [
       'Ext.form.field.ComboBox',
       'Ext.button.Button',
       'Ext.grid.Panel',
       'Ext.grid.column.Date',
       'Ext.grid.View'
   ],
   alias : "widget.clientesPagoPendientes",
   height: 473,
   width: 688,
   bodyPadding: 10,
   title: 'Clientes con pagos pendientes',

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
                           xtype: 'button',
                           text: 'Buscar'
                       },
                       {
                           xtype: 'gridpanel',
                           title: 'Clientes',
                           columns: [
                               {
                                   xtype: 'gridcolumn',
                                   width: 202,
                                   defaultWidth: 200,
                                   weight: 200,
                                   dataIndex: 'string',
                                   text: 'Nombres y Apellidos'
                               },
                               {
                                   xtype: 'datecolumn',
                                   width: 161,
                                   dataIndex: 'date',
                                   text: 'Pago pendiente'
                               }
                           ]
                       }
                   ]
               }
           ]
       });

       me.callParent(arguments);
   }

});