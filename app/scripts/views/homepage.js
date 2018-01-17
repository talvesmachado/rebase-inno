define(['utils/communicator', 'hbars!templates/home' 
  ],
  function(Communicator, Tpl ) {
    'use strict';
    return Marionette.LayoutView.extend({
      template: Tpl,
      className: 'homepage',
      initialize: function() {
        console.log('initialize a Homepage View');
        Communicator.mediator.trigger('APP:starter:homepage')
      },
      onShow: function() {
        
      }
    });
  });
