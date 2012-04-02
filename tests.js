var requirejs = require('requirejs');
var scenario  = require('gerbil').scenario;

requirejs.config({
  nodeRequire: require,
  baseUrl: 'js',
  paths: {
    "jquery"     : "./libs/jquery",
    "underscore" : "./libs/underscore",
  }
});

requirejs(['jquery', 'backbone', 'app/views/test'], function($, Backbone, View) {
  scenario('Something', {
    'Testing a view': function(g) {
      var view = new View;
      var renderedView = view.render().el;

      g.assertEqual($(renderedView).html(), "Hello Dude");
    }
  });
});
