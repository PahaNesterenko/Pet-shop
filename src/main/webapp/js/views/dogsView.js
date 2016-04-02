define([
        'jquery',
        'backbone',
        'underscore',
        'text!templates/dogsTemplate.html'],
    function($, Backbone, _, template){
        var View = Backbone.View.extend({
            el: '#main',
            initialize: function(){

                this.template = _.template( template, {} );
            },
            render: function(){
                $(this.el).html( this.template );
            },
            events: {
                'click #toMainPageButton': 'toMainPageButton',
            },
            toMainPageButton: function(){
                Backbone.history.navigate('', true);
            }
        });

        return View;
    });