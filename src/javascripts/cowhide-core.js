(function($, _, undefined) {
	'use strict';

    $.cowhide = $.cowhide || {}
    $.extend($.cowhide, {
        version: '0.0.1',

        // List of registered widgets
        registeredWidgets: [],

        drivingMode: false,

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

        // TODO: use `backdrop` from Bootstrap's modal
        backdrop: function (callback) {
            var $backdrop = $('<div class="modal-backdrop theme-change-backdrop fade" />');

            $backdrop.appendTo(document.body);
            $backdrop[0].offsetWidth; // force reflow
            $backdrop.addClass('in');

            return $backdrop;
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

            var $backdrop = this.backdrop();
            setTimeout(function() {
                $link.attr('href', dir + base);
                $backdrop.remove();
            }, 200);
        },

        toggleDrivingMode: function() {
            var self = this;
            self.drivingMode = !self.drivingMode;
            _.each(this.registeredWidgets, function(w) {
                if (w.setDrivingMode)
                    w.setDrivingMode(self.drivingMode);
            });
        },

        forceFrameworkRestrictions: function() {
            _.each(this.registeredWidgets, function(w) {
                w.forceMinFontSize();
                w.forceMaxFontSize();
                w.forceMinWidth();
            });
        },

        fatal: function(msg) {
            throw new Error(msg);
        }
    });

    $(function() {
        setInterval(function() {
            $.cowhide.forceFrameworkRestrictions();
        }, 1000);
    });
})(window.jQuery, window._);