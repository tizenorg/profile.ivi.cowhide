(function($, undefined) {
	'use strict';

    var ChWidget = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.ch_widget.defaults);
        console.log(this.options);
    };

    ChWidget.prototype.forceMaxWidth = function() {
        if (this.$element.width() > this.options.maxWidth)
            this.$element.width(this.options.maxWidth);
    };

    $.fn.ch_widget = function() {}
    $.fn.ch_widget.defaults = {
        maxWidth: 30
    };
    $.fn.ch_widget.Constructor = ChWidget;
})(window.jQuery);