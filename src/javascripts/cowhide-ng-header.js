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

  module.directive('chHeader', function() {
    return {
      restrict: 'E',
      scope: {title: '@'},
      template: '<div class="ch-header" data-title></div>',
      replace: true,

      link: function postLink(scope, iElement, iAttrs) {
        iElement.ch_header('show');
      }
    };
  });
})(window.angular, window.cowhide_ng_module);
