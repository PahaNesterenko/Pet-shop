define([
	'jquery', 
	'backbone', 
	'underscore', 
	'views/choosePetSpeciesView'], 
function($, Backbone, _, mainView){
	var Router = Backbone.Router.extend({
		initialize: function(){
			this.mainView = mainView;
			Backbone.history.start();
		},
		routes: {
			'': 'choosePetSpecies'
		},
		'choosePetSpecies': function(){
			this.mainView.render();
		}
	});
	
	return Router;
});
