/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function($, undefined) {
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

    /* CHRADIOINPUT PLUGIN DEFINITION
     * ============================== */

    var old = $.fn.ch_radio_input;

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


    /* CHRADIOINPUT NO CONFLICT
     * ======================== */

    $.fn.ch_radio_input.noConflict = function() {
        $.fn.ch_radio_input = old;
        return this;
    };


    /* CHRADIOINPUT DATA-API
     * ===================== */

    $(function() {
        $('input[type=radio]').ch_radio_input();
    })
})(window.jQuery);
