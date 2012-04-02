var dependencies = ['jquery', 'app/models/sample', 'app/views/test'];

define(dependencies, function($, Model, View) {
  var model = new Model({ name: 'Dr Brown' });
  var view = new View({ model: model });

  $('body').append(view.render().el);
});
