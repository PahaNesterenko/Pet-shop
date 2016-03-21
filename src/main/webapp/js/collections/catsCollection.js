define(['jquery', 'backbone', 'underscore', 'models/catModel'], function($, Backbone, _, catModel){
    var Model = Backbone.Collection.extend({
        model: catModel,
        url: '../rest/cats'

    });

    return Model;
});