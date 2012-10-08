(function($, undefined) {
	'use strict';

    var ChWidget = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.ch_widget.defaults);
    };

    ChWidget.prototype = $.extend({}, {
        register: function() {
            this.guid = $.cowhide.GUID();
            $.cowhide.register(this);
        },

        forceMaxWidth: function() {
            if (this.$element.width() > this.options.maxWidth && this.options.maxWidth > 0)
                this.$element.width(this.options.maxWidth);
        },

        forceMaxFontSize: function() {
            if (this.options.maxFontSize > 0) {
                var current = this.$element.css('font-size');
                if (parseFloat(current) > this.options.maxFontSize) {
                    this.$element.css('font-size', this.options.maxFontSize + 'px');
                }
            }
        }
     });

    $.fn.ch_widget = function() {}
    $.fn.ch_widget.defaults = {
        maxWidth: 0,
        maxFontSize: 0
    };
    $.fn.ch_widget.Constructor = ChWidget;
})(window.jQuery);