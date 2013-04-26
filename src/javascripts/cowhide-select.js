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

    var ChSelect = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            {},
            $.fn.ch_widget.defaults,
            {
                disableWhenDriving: true
            });
    };

    ChSelect.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChSelect
        }
    );

    $.fn.ch_select = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_select'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_select', (data = new ChSelect(this, options)));
                data.register();
            }
        });
    };

    $.fn.ch_select.Constructor = ChSelect;

    /* CHBUTTON DATA-API
     * ================= */
    $(function() {
        $('select').ch_select();
    })
})(window.jQuery);
