/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function($, undefined) {
	'use strict';

    var ChWidget = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.ch_widget.defaults);
        this.drivingMode = false;
    };

    ChWidget.prototype = $.extend({}, {
        register: function() {
            this.guid = $.cowhide.GUID();
            $.cowhide.register(this);
        },

        verifyMinWidth: function() {
            if (this.$element.width() < this.options.minWidth && this.options.minWidth > 0)
              $.cowhide.fatal("#10: this widget has a minimum allowed width of " +
                              this.options.minWidth + "px", this.$element);
        },

        verifyMinFontSize: function() {
            if (this.options.minFontSize > 0) {
                var current = this.$element.css('font-size');
                if (parseFloat(current) < this.options.minFontSize) {
                    $.cowhide.fatal("#20: this widget has a minimum allowed font-size of " +
                                    this.options.minFontSize + "px", this.$element);
                }
            }
        },

        verifyMaxFontSize: function() {
            if (this.options.maxFontSize > 0) {
                var current = this.$element.css('font-size');
                if (parseFloat(current) > this.options.maxFontSize) {
                    $.cowhide.fatal("#21: this widget has a maximum allowed font-size of " +
                                    this.options.maxFontSize + "px", this.$element);
                }
            }
        },

        setDrivingMode: function(drivingMode) {
            if (this.$element.data('ignore-driving-mode') === undefined &&
                this.options.disableWhenDriving)
            {
                var wasDisabled = this.$element.attr('disabled') == 'disabled';
                var d = 'disabled';

                if (!drivingMode && !this.drivingMode && wasDisabled)
                    // If
                    //   we're not entering driving mode, and
                    //   we weren't already in driving mode, and
                    //   the widget wasn't already disabled, perhaps for
                    //   other reasons.
                    return;

                if (drivingMode) {
                    this.$element.attr(d, d);
                    this.$element.disabled = true;
                    this.$element.addClass(d);

                    if (this.onDrivingModeEnter)
                        this.onDrivingModeEnter();

                    this.drivingMode = true;
                } else if (this.drivingMode) {
                    this.$element.removeAttr(d);
                    this.$element.disabled = false;
                    this.$element.removeClass(d);

                    if (this.onDrivingModeExit)
                        this.onDrivingModeExit();

                    this.drivingMode = false;
                }
            }
        },

        onDrivingModeEnter: undefined,
        onDrivingModeExit: undefined
     });

    $.fn.ch_widget = function() {}
    $.fn.ch_widget.defaults = {
        minWidth: 0,
        minFontSize: 0,
        maxFontSize: 0,
        disableWhenDriving: false
    };
    $.fn.ch_widget.Constructor = ChWidget;
})(window.jQuery);
