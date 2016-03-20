define(['jquery', 'backbone', 'underscore'], function($, Backbone, _){
    var Model = Backbone.Model.extend({
        url: 'rest/dogs'

    });

    return Model;
});