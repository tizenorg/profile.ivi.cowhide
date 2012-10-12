(function($, undefined) {
    'use strict';

    var ChTextInput = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            {},
            $.fn.ch_widget.defaults,
            {
                disableWhenDriving: true
            });
    };

    ChTextInput.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChTextInput
        }
    );

    $.fn.ch_text_input = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_text_input'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_text_input', (data = new ChTextInput(this, options)));
                data.register();
            }
        });
    };

    $.fn.ch_text_input.Constructor = ChTextInput;

    /* CHBUTTON DATA-API
     * ================= */
    $(function() {
        $('input[type=text]').ch_text_input();
    })
})(window.jQuery);