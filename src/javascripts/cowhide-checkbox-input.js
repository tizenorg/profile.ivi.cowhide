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


    /* CHCHECKBOXINPUT PLUGIN DEFINITION
     * ================================= */

    var old = $.fn.ch_checkbox_input;

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

    $.fn.ch_checkbox_input.Constructor = ChCheckboxInput;


    /* CHCHECKBOXINPUT NO CONFLICT
     * =========================== */

    $.fn.ch_checkbox_input.noConflict = function() {
        $.fn.ch_checkbox_input = old;
        return this;
    };


    /* CHCHECKBOXINPUT DATA-API
     * ================= */

    $(function() {
        $('input[type=checkbox]').ch_checkbox_input();
    })
})(window.jQuery);
