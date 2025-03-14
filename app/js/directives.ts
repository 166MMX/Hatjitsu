'use strict';

import { angular } from '';

/* Directives */

angular.module('pokerApp.directives', []).
  directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('cardvalue', function () {
    return function (scope, elm, attrs) {
      var value = scope.card || scope.vote.vote,
        code = isNaN(parseInt(value, 10)) ? value.charCodeAt() : value;
      elm.addClass('card--' + code);
    };
  }).
  directive('selectedvote', function () {
    return function (scope, elm) {
      if (scope.vote.sessionId === scope.sessionId) {
        elm.addClass('card--selected');
      }
    };
  });
