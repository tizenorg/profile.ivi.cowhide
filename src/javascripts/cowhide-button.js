(function($, undefined) {
    'use strict';

    var ChButton = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            {},
            $.fn.ch_widget.defaults,
            {
                minFontSize: 12,
                disableWhenDriving: true
            });
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

            if (!data) {
                $this.data('ch_button', (data = new ChButton(this, options)));
                data.register();
                data.forceMinFontSize();
            }

            $this.button(option);
        });
    };

    $.fn.ch_button.Constructor = ChButton;

    /* CHBUTTON DATA-API
     * ================= */
    $(function() {
        $('.btn, button, input[type=button]').ch_button();
    })
})(window.jQuery);