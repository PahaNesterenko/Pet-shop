define([
        'jquery',
        'backbone',
        'underscore',
        'text!templates/catTemplate.html'],
    function($, Backbone, _, template){
        var View = Backbone.View.extend({
                template: _.template(template),
            initialize: function(){

                console.log("init one cat");
            },
            render: function(){
                console.log("render one cat");
                $(this.el).append( this.template(this.model.toJSON()) );
                return this;
            },
            
        });

        return View;
    });
