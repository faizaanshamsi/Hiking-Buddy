define('frontend/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend({
    namespace: 'api/v1'
  });

});