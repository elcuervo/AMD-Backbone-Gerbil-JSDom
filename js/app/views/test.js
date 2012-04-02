var dependencies = [
  'jquery',
  'underscore',
  'backbone',
  'text!app/templates/test/view_template.html'
];

define(dependencies, function($, _, Backbone, template) {
  return Backbone.View.extend({
    template: template,
    render: function() {
      $(this.el).html(_.template(this.template, this.model.toJSON()));
      return this;
    }
  });
});
