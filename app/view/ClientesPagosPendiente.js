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
   title: 'Generacion de cobro de pago',

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
                           xtype: 'textfield',
                           fieldLabel: 'Nombre',
                           width : 400
                       },
                       {
                           xtype: 'button',
                           text: 'Buscar'
                       },
                       {
                           xtype: 'gridpanel',
                           title: 'Clientes',
                           store: 'EscuelaFutbol.store.SuscripcionesNuevas',
                           columns: [
                               {
                                   xtype: 'gridcolumn',
                                   width: 202,
                                   defaultWidth: 200,
                                   weight: 200,
                                   dataIndex: 'nombre',
                                   text: 'Nombres y Apellidos'
                               },
                               {
                                   xtype: 'datecolumn',
                                   width: 161,
                                   dataIndex: 'number',
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