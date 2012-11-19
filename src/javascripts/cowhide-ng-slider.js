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
