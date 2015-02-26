/* globals define */
define('rsvp', ['ember'], function(Ember) {
  return Ember['default'].RSVP;
});

define('ember-cli-oasis/oasis', ['oasis'], function(Oasis) {
  'use strict';

  return {
    'default': Oasis
  };
});
