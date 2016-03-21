define([
        'jquery',
        'backbone',
        'underscore',
        'collections/catsCollection',
'views/catView'],
    function($, Backbone, _, catCollection, catView){
        var View = Backbone.View.extend({
            el: '#catsCollection',
            initialize: function(){
                console.log('init cat collection view');
            },
            render: function(){
                console.log('render cat collection view');
                this.collection = new catCollection();
                var self = this;
                this.collection.fetch({
                    success: function(data){
                        console.log('collection fetched ' + data);
                        self.collection.each(function(cat){
                            $(self.el).append( new catView({model:cat}).render().el );
                        });
                    }
                });
               
               
            },
            /*events: {
                'click #toMainPageButton': 'toMainPageButton',
            },
            toMainPageButton: function(){
                Backbone.history.navigate('', true);
            }*/
        });

        return View;
    });
