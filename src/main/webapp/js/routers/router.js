define([
	'jquery', 
	'backbone', 
	'underscore', 
	'views/choosePetSpeciesView',
'views/catsView',
'views/dogsView',
'views/layoutView'], 
function($, Backbone, _, mainView, catsView, dogsView, layoutView){
	var Router = Backbone.Router.extend({
		initialize: function(){
			Backbone.history.start();
		},
		routes: {
			'': 'main',
			'choosePetSpecies': 'choosePetSpecies',
			'catsRoute': 'catsRoute',
			'dogsRoute': 'dogsRoute'
		},
		'choosePetSpecies': function(){
			new mainView().render();
		},
		'main': function(){
			console.log('render layout');
			new layoutView().render();
		},
		'catsRoute': function() {
			new catsView().render();
		},
		'dogsRoute': function() {
			dogsView.render();
		}
	});
	
	return Router;
});
