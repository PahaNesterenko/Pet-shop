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
                $(this.el).append( this.template );
            }
        });

        return new View();
    });
