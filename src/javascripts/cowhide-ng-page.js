/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function(ng, module) {
  'use strict';

  module.directive('chPage', function() {
    return {
      restrict: 'E',
      template: '<div class="page" ng-transclude></div>',
      replace: true,
      transclude: true,

      link: function postLink(scope, iElement, iAttrs) {
        iElement.ch_page();
      }
    };
  });
})(window.angular, window.cowhide_ng_module);
