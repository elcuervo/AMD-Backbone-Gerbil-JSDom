define(['backbone', 'jquery'], function(Backbone, $) {
  return Backbone.Router.extend({
    routes: {
      "test": "test"
    },

    test: function() {
      $("body").append($("<div>").attr({id: "router_test"}).html("OK"));
    }
  });
});
