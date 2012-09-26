(function($, undefined) {
    'use strict';

    var ChButton = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend({}, $.fn.ch_widget.defaults);
    };

    ChButton.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChButton
        }
    );

    $.fn.ch_button = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_button'),
                options = typeof option == 'object' && option;

            if (!data)
                $this.data('ch_button', (data = new ChButton(this, options)));

            $this.button(option);
            data.forceMaxWidth();
        });
    };

    $.fn.ch_button.Constructor = ChButton;

    /* CHBUTTON DATA-API
     * ================= */
    $(function() {
        $('body').on('click.ch_button.data-api', '[data-toggle^=ch-button]', function(e) {
            var $btn = $(e.target);
            if (!$btn.hasClass('btn'))
                $btn = $btn.closest('.btn');
            if ($btn) {
                $btn.ch_button('toggle');
            }
        });
    })
})(window.jQuery);