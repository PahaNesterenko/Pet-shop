define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/sidebarTemplate.html'],
  function($, Backbone, _, template){
    var View = Backbone.View.extend({
      el: '#sidebar',
      initialize: function(){

        this.template = _.template( template, {} );
        return this;
      },
      render: function(){
        $(this.el).html( this.template );
        console.log('render sidebar');
      }
    });

    return View;
  });
