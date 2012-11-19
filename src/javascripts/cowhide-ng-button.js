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
