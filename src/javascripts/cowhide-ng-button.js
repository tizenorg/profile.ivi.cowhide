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

  module.directive('chButton', function() {
    return {
      restrict: 'E',
      scope: {
        marquee: '@',
        fixedWidth: '@'
      },
      template: '<button class="btn" data-marquee data-fixed-width ng-transclude></div>',
      replace: true,
      transclude: true,

      link: function postLink(scope, iElement, iAttrs) {
        iElement.ch_button();
      }
    };
  });
})(window.angular, window.cowhide_ng_module);
