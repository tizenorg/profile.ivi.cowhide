(function($, _, undefined) {
	'use strict';

    $.cowhide = $.cowhide || {}
    $.extend($.cowhide, {
        version: '0.0.1',

        // List of registered widgets
        registeredWidgets: [],

        GUID: function() {
            var S4 = function () {
                return Math.floor(
                    Math.random() * 0x10000 /* 65536 */
                    ).toString(16);
            };

            return (
                S4() + S4() + "-" +
                S4() + "-" +
                S4() + "-" +
                S4() + "-" +
                S4() + S4() + S4()
                );
        },

        // Registers a widget
        register: function(widget) {
            var self = this;
            var guids = _.map(self.registeredWidgets, function(w) {
                return w.guid;
            });

            if (_.indexOf(guids, widget.guid) == -1) {
                self.registeredWidgets.push(widget);
            }
        },

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
                base = 'cowhide-default-night.css';
            else
                base = 'cowhide-default.css';

            $link.attr('href', dir + base);
        },

        forceMaxFontSize: function() {
            _.each(this.registeredWidgets, function(w) {
                w.forceMaxFontSize();
            });
        },

        forceFrameworkRestrictions: function() {
            _.each(this.registeredWidgets, function(w) {
                w.forceMaxFontSize();
                w.forceMaxWidth();
            });
        }
    });

    $(function() {
        setInterval(function() {
            $.cowhide.forceFrameworkRestrictions();
        }, 1000);
    });
})(window.jQuery, window._);