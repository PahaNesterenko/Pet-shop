define([
        'jquery',
        'backbone',
        'underscore',
        'text!templates/choosePetSpecies.html'],
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
                'click #catButton': 'catButton',
                'click #dogButton': 'dogButton'
            },
            catButton: function(ev){
                ev.preventDefault();
                Backbone.history.navigate( 'catsRoute', true);
            },
            dogButton: function(ev){
                ev.preventDefault();
                Backbone.history.navigate( 'dogsRoute', true);
            }
        });

        return new View();
    });
