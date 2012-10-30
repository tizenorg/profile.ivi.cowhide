(function($, _, undefined) {
	'use strict';

    $.cowhide = $.cowhide || {}
    $.extend($.cowhide, {
        version: '0.0.1',
        themeEngineOptions: {
            path: 'css',
            initial: 'default',
            minified: false
        },

        // List of registered widgets
        registeredWidgets: [],

        drivingMode: false,
        nightMode: false,
        currentTheme: 'default',

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

        initThemeEngine: function(options) {
            $.extend(this.themeEngineOptions, options);
            this.currentTheme = this.themeEngineOptions.initial;

            var $link = $('link#cowhide-theme');
            if ($link.length === 0) {
                this.fatal("could not find <link> with id 'cowhide-theme'.");
            }
        },

        setTheme: function(name, nightMode) {
            if (name === this.currentTheme && nightMode == this.nightMode) {
                return;
            }

            var $link = $('link#cowhide-theme');
            var theme =
                this.themeEngineOptions.path +
                '/cowhide-' +
                name || 'default';

            if (nightMode === true || (nightMode === undefined && this.nightMode === true)) {
                theme += '-night';
            }

            if (this.themeEngineOptions.minified) {
                theme += '.min';
            }

            theme += '.css';

            var $backdrop = this.backdrop();
            setTimeout(function() {
                $link.attr('href', theme);
                $backdrop.remove();
            }, 200);

            this.currentTheme = name;
            if (nightMode !== undefined) {
                this.nightMode = nightMode;
            }
        },

        toggleNightMode: function() {
            this.setTheme(this.currentTheme, !this.nightMode);
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
            throw new Error("[Cowhide] Fatal error: " + msg);
        }
    });

    $(function() {
        setInterval(function() {
            $.cowhide.forceFrameworkRestrictions();
        }, 1000);
    });
})(window.jQuery, window._);