(function($, undefined) {
    'use strict';

    var ChRadioInput = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            {},
            $.fn.ch_widget.defaults,
            {
                disableWhenDriving: true
            });
    };

    ChRadioInput.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChRadioInput
        }
    );

    $.fn.ch_radio_input = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_radio_input'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_radio_input', (data = new ChRadioInput(this, options)));
                data.register();
            }
        });
    };

    $.fn.ch_radio_input.Constructor = ChRadioInput;

    /* CHRADIOINPUT DATA-API
     * ================= */
    $(function() {
        $('input[type=radio]').ch_radio_input();
    })
})(window.jQuery);