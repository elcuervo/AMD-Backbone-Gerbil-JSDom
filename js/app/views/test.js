define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.View.extend({
    template: 'Hello <%= name %>',
    render: function() {
      $(this.el).html(_.template(this.template, this.model.toJSON()));
      return this;
    }
  });
});
