(function(ng, module) {
  'use strict';

  module.directive('chPage', function() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="page" ng-transclude></div>',
      replace: true
    };
  });
})(window.angular, window.cowhide_ng_module);
