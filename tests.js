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

var dependencies = [
  'jquery',
  'backbone',
  'app/models/sample', 'app/views/test', 'app/routers/sample'
];

requirejs(dependencies, function($, Backbone, Model, View, Router) {
  scenario('Testing Headless Backbone features', {
    'saving a model': function(g) {
      Backbone.sync = function() {};

      var validModel = new Model({ name: 'Marty' });
      validModel.save();

      var invalidModel = new Model;
      invalidModel.save();

      g.assert(validModel.isValid());
      g.assert(!invalidModel.isValid());
    },

    'render a view': function(g) {
      var model = new Model({ name: "Larry" });
      var view = new View({ model: model });
      var renderedView = view.render().el;

      g.assertEqual($(renderedView).html(), "Hello Larry");
    },

    'working with the router': function(g) {
      var router = new Router;

      Backbone.history.start({ pushState: true });
      Backbone.history.loadUrl("test");

      g.assertEqual($("#router_test").html(), "OK");

      Backbone.history.stop();
    }
  });
});
