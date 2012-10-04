(function($, undefined) {
    'use strict';

    var ChSeatSelector = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend({}, $.fn.ch_widget.defaults);
    };

    ChSeatSelector.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChSeatSelector
        }
    );

    $.fn.ch_seat_selector = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_seat_selector'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_seat_selector', (data = new ChSeatSelector(this, options)));
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