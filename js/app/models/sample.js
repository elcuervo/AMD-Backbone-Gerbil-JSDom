define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    validate: function(attr) {
      if(!attr.name) return "Name is missing"
    }
  });
});
