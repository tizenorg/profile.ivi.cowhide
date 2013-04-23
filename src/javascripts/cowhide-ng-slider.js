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

  module.directive('chSlider', function() {
    return {
      restrict: 'E',
      scope: {
        height: '@',
        orientation: '@'
      },
      template: '<div class="ch-slider" data-height data-orientation></div>',
      replace: true,

      link: function postLink(scope, iElement, iAttrs) {
        iElement.ch_slider({
          orientation: iAttrs.orientation
        });
      }
    };
  });
})(window.angular, window.cowhide_ng_module);
