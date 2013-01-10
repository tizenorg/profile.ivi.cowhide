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