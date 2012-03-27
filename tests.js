var requirejs = require('requirejs');
var scenario  = require('gerbil').scenario;

requirejs.config({
  nodeRequire: require,
  baseUrl: 'js'
});

requirejs(['underscore', 'backbone', 'app'], function(_, Backbone, TestModel) {
  scenario('Testing AMD', {
    'use a backbone model': function(g) {
      var testModel = new TestModel;

      g.assertEqual(testModel.get('name'), 'Larry');
    }
  });
});
