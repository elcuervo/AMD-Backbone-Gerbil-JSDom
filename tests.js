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

requirejs(['jquery', 'backbone', 'app/models/sample', 'app/views/test'], function($, Backbone, Model, View) {
  scenario('Something', {
    'Testing a view': function(g) {
      var model = new Model({name: "Larry"});
      var view = new View({model: model});
      var renderedView = view.render().el;

      g.assertEqual($(renderedView).html(), "Hello Larry");
    }
  });
});
