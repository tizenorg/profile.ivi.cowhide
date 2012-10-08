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
        }
     });

    $.fn.ch_widget = function() {}
    $.fn.ch_widget.defaults = {
        minWidth: 0,
        minFontSize: 0
    };
    $.fn.ch_widget.Constructor = ChWidget;
})(window.jQuery);