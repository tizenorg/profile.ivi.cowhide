(function($, undefined) {
    'use strict';

    var ChCheckboxInput = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            {},
            $.fn.ch_widget.defaults,
            {
                disableWhenDriving: true
            });
    };

    ChCheckboxInput.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChCheckboxInput
        }
    );

    $.fn.ch_checkbox_input = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_checkbox_input'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_checkbox_input', (data = new ChCheckboxInput(this, options)));
                data.register();
            }
        });
    };

    $.fn.ch_checkbox.Constructor = ChCheckboxInput;

    /* CHCHECKBOXINPUT DATA-API
     * ================= */
    $(function() {
        $('input[type=checkbox]').ch_checkbox_input();
    })
})(window.jQuery);