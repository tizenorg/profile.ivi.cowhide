(function(ng, module) {
  'use strict';

  module.directive('chScrollable', function() {
    return {
      restrict: 'E',
      template: '<div class="ch-scrollable" ng-transclude></div>',
      replace: true,
      transclude: true,

      link: function postLink(scope, iElement, iAttrs) {
        iElement.ch_scrollable('enable');
      }
    };
  });
})(window.angular, window.cowhide_ng_module);
