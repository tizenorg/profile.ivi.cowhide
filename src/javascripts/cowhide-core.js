(function($, undefined) {
	'use strict';

    $.cowhide = $.cowhide || {}
    $.extend($.cowhide, {
        version: '0.0.1',

        toggleNightMode: function() {
            function basename(path) {
                return path.replace( /.*\//, "" );
            }

            function dirname(path) {
                return path.match( /.*\// );
            }

            var $link = $('link#cowhide-theme');
            var path = $link.attr('href');
            var base = basename(path);
            var dir = dirname(path);

            if (base == 'cowhide-default.css')
                base = 'cowhide-cyborg.css';
            else
                base = 'cowhide-default.css';

            $link.attr('href', dir + base);
        }
    });
})(window.jQuery);