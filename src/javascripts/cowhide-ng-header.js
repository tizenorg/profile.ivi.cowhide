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
