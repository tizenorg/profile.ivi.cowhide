/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function($, _, undefined) {
	'use strict';

    $.cowhide = $.cowhide || {}
    $.extend($.cowhide, {
        version: '0.0.1',
        options: {
          monitorFrameworkRestrictions: false,
          connectToAMB: true
        },
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

        vehicle: null,

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

            /* TODO: core should ask `page` what a page looks like. */
            if(!(widget.$element[0].tagName == 'DIV' && widget.$element.hasClass('page'))) {
                var $page = widget.$element.parent().closest('div.page');
                if ($page.length === 0) {
                    $.cowhide.fatal("#30: every widget must be within a div with class='page'.", this.$element);
                } else {
                    $page.ch_page('register', widget);
                }
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

            var $link = $('link#cowhide-theme');
            if ($link.length === 0) {
                this.fatal("#40: could not find <link> with id 'cowhide-theme'.");
            }
        },

        setTheme: function(name, nightMode) {
            if (name === this.currentTheme && nightMode == this.nightMode) {
                return;
            }

            var $link = $('link#cowhide-theme');
            var theme =
                this.themeEngineOptions.path +
                '/cowhide-' +
                name || 'default';

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

        setNightMode: function(value) {
          if (this.nightMode == value)
            return;

          this.setTheme(this.currentTheme, !this.nightMode);
        },

        toggleNightMode: function() {
            this.setNightMode(!this.nightMode);
        },

        toggleDrivingMode: function() {
            this.setDrivingMode(!this.drivingMode);
        },

        setDrivingMode: function(value) {
            var self = this;

            if (self.drivingMode == value)
                return;

            self.drivingMode = value;
            _.each(this.registeredWidgets, function(w) {
                if (w.setDrivingMode)
                    w.setDrivingMode(self.drivingMode);
            });
        },


        listenToVehicle: function() {
            var self = this;

            self.vehicle = new window.Vehicle(
                function() {
                    $(document).on("DrivingMode", function(e) {
                        self.setDrivingMode(e.originalEvent.value == 1);
                    });

                    $(document).on("NightMode", function(e) {
                        self.setNightMode(e.originalEvent.value);
                    });
                },
                function() {
                    self.fatal("There was a problem connecting to AMB's web socket.");
                }
            );
        },

        verifyFrameworkRestrictions: function() {
            _.each(this.registeredWidgets, function(w) {
                w.verifyMinFontSize();
                w.verifyMaxFontSize();
                w.verifyMinWidth();
            });
        },

        fatal: function(msg, $element) {
            var output = "";

            output += "[Cowhide] Fatal error";
            if ($element !== undefined) {
                output += " (offending widget: ";
                var id = $element.attr('id');
                var classes = $element.attr('class');

                if (id)
                    output += "#(" + id + ")";
                if (classes)
                    output += ".(" + classes + ")";

                output += ")";
            }

            output += ": " + msg;
            throw new Error(output);
        }
    });

    $(function() {
        if ($.cowhide.options.connectToAMB) {
          $.cowhide.listenToVehicle();
        }

        if ($.cowhide.options.monitorFrameworkRestrictions) {
          setInterval(function() {
              $.cowhide.verifyFrameworkRestrictions();
          }, 1000);
        }
    });
})(window.jQuery, window._);
