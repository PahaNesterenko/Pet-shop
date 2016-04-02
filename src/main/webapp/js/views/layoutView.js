define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/layoutTemplate.html',
'views/choosePetSpeciesView',
'views/sidebarView'],
  function($, Backbone, _, template, chooseView, sidebarVeiw){
    var View = Backbone.View.extend({
      el: '#layout',
      initialize: function(){

        this.template = _.template( template, {} );
        console.log('init layout');
        return this;
      },
      render: function(){
        $(this.el).append( this.template );
        new chooseView().render();
        new sidebarVeiw().render();
        console.log('render layout');
      }
     
    });

    return View;
  });
