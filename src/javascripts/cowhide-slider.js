(function($, undefined) {
    'use strict';

    var ChSlider = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend({}, $.fn.ch_widget.defaults);
    };

    ChSlider.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChSlider
        }
    );

    $.fn.ch_slider = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_slider'),
                options = typeof option == 'object' && option;

            if ($this.attr('data-height')) {
                options = $.extend(options, {height: $this.attr('data-height')});
            }
            if (!data) {
                $this.data('ch_slider', (data = new ChSlider(this, options)));
            }

            $this.slider(options);
        });
    };

    $.fn.ch_button.Constructor = ChSlider;

    /* CHSLIDER DATA-API
     * ================= */
    $(function() {
        $('.ch-slider').ch_slider();
        $('.ch-slider-vertical').ch_slider({
            orientation: 'vertical'
        });
    })
})(window.jQuery);