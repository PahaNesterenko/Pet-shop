define([
	'jquery', 
	'backbone', 
	'underscore', 
	'views/choosePetSpeciesView',
'views/catsView',
'views/dogsView'], 
function($, Backbone, _, mainView, catsView, dogsView){
	var Router = Backbone.Router.extend({
		initialize: function(){
			Backbone.history.start();
		},
		routes: {
			'': 'choosePetSpecies',
			'catsRoute': 'catsRoute',
			'dogsRoute': 'dogsRoute'
		},
		'choosePetSpecies': function(){
			mainView.render();
		},
		'catsRoute': function() {
			catsView.render();
		},
		'dogsRoute': function() {
			dogsView.render();
		}
	});
	
	return Router;
});
