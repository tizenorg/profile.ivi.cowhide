(function($, undefined) {
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

        forceMinWidth: function() {
            if (this.$element.width() < this.options.minWidth && this.options.minWidth > 0)
                this.$element.width(this.options.minWidth);
        },

        forceMinFontSize: function() {
            if (this.options.minFontSize > 0) {
                var current = this.$element.css('font-size');
                if (parseFloat(current) < this.options.minFontSize) {
                    this.$element.css('font-size', this.options.minFontSize + 'px');
                }
            }
        },

        setDrivingMode: function(drivingMode) {
            if (!this.$element.data('ignore-driving-mode') && this.options.disableWhenDriving) {
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
                    this.drivingMode = true;
                } else if (this.drivingMode) {
                    this.$element.removeAttr(d);
                    this.$element.disabled = false;
                    this.$element.removeClass(d);
                    this.drivingMode = false;
                }
            }
        }
     });

    $.fn.ch_widget = function() {}
    $.fn.ch_widget.defaults = {
        minWidth: 0,
        minFontSize: 0,
        disableWhenDriving: false
    };
    $.fn.ch_widget.Constructor = ChWidget;
})(window.jQuery);