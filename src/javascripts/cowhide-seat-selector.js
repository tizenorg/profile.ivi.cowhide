/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function($, undefined) {
    var ChSeatSelector = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend({}, $.fn.ch_widget.defaults);
    };

    ChSeatSelector.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChSeatSelector,
            removeSelection: function() {
                var $t = this.$element.find('table');
                $t.removeClass('front-left');
                $t.removeClass('front-right');
                $t.removeClass('rear-left');
                $t.removeClass('rear-right');
            },
            frontLeft: function() {
                this.removeSelection();
                this.$element.find('table').addClass('front-left');
            },

            frontRight: function() {
                this.removeSelection();
                this.$element.find('table').addClass('front-right');
            },

            rearLeft: function() {
                this.removeSelection();
                this.$element.find('table').addClass('rear-left');
            },

            rearRight: function() {
                this.removeSelection();
                this.$element.find('table').addClass('rear-right');
            }
        }
    );

    $.fn.ch_seat_selector = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_seat_selector'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_seat_selector', (data = new ChSeatSelector(this, options)));
                data.register();
                var template = [
                    '<table>',
                    '    <tr>',
                    '        <td class="front-left"></td>',
                    '        <td class="front-right"></td>',
                    '    </tr>',
                    '    <tr>',
                    '        <td class="rear-left"></td>',
                    '        <td class="rear-right"></td>',
                    '    </tr>',
                    '</table>'].join('\n');
                $this.html(template);
            } else {
                if (option == 'frontLeft')
                    data.frontLeft();
                else if (option == 'frontRight')
                    data.frontRight();
                else if (option == 'rearLeft')
                    data.rearLeft();
                else if (option == 'rearRight')
                    data.rearRight();
                else if (option == 'removeSelection')
                    data.removeSelection();
            }
        });
    };

    $.fn.ch_seat_selector.Constructor = ChSeatSelector;

    /* CHSEATSELECTOR DATA-API
     * ================= */
    $(function() {
        $('.ch-seat-selector').ch_seat_selector();
    })
})(window.jQuery);
