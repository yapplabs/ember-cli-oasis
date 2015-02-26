/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-oasis',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/oasis.js/dist/oasis.amd.js');
    app.import('vendor/oasis-shim.js');
  }
};
