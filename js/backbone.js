define(['jquery', 'libs/backbone.js'], function($) {
  if(typeof window == 'undefined') {
    var jsdom      = require('jsdom');

    this.window    = jsdom.jsdom().createWindow();
    this.document  = window.document;
    this.navigator = window.navigator;
  }

  Backbone.setDomLibrary($);
  return Backbone;
});
