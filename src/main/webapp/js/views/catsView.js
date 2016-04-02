define([
        'jquery',
        'backbone',
        'underscore',
        'text!templates/catsTemplate.html',
'views/catsCollectionView'],
    function($, Backbone, _, template, catsCollectionView){
        var View = Backbone.View.extend({
            el: '#row',
            initialize: function(){

                this.template = _.template( template, {} );
            },
            render: function(){
                $(this.el).html( this.template );
                new catsCollectionView().render();
            },
            events: {
                'click #toMainPageButton': 'toMainPageButton',
            },
            toMainPageButton: function(){
                Backbone.history.navigate('choosePetSpecies', true);
            }
        });

        return View;
    });
