// This set's up the module paths for underscore and backbone
require.config({
  baseUrl: '/js',
  paths: {
    "libs": "../bower_components/",
    "underscore": "../bower_components/underscore/underscore",
    "backbone": "../bower_components/backbone/backbone",
    "jquery": "../bower_components/jquery/dist/jquery"
  },
  shim: {
    backbone: {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    underscore: {
      'exports': '_'
    }
  }
});

require([
    'underscore',
    'backbone',
    'app'
  ],
  function (_, Backbone, app) {
    app.init();
  });
