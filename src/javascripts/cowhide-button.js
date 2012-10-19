(function($, undefined) {
    'use strict';

    var ChButton = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            options,
            $.fn.ch_widget.defaults,
            {
                minFontSize: 12,
                maxFontSize: 24,
                disableWhenDriving: true
            });

        if (this.options.fixedWidth) {
            this.$element.css({width: this.options.fixedWidth});
        }

        if (this.options.marquee) {
            this.enableMarquee();
        }
    };

    ChButton.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChButton,

            enableMarquee: function() {
                if (this.options.marquee && (
                    this.$element[0].tagName == 'A' ||
                    this.$element[0].tagName == 'BUTTON'))
                {
                    var text = this.$element.text()

                    var $marquee = $('<marquee/>');
                    $marquee.attr('behavior', 'alternate')
                    $marquee.attr('scrollamount', 1)
                    $marquee.attr('width', this.$element.width());
                    $marquee.text(text);

                    this.$element.html($marquee);
                }
            }
        }
    );

    $.fn.ch_button = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_button'),
                options = typeof option == 'object' && option;

            if ($this.data('marquee')) {
                options = $.extend(options, {marquee: true});
            }
            if ($this.data('fixed-width')) {
                options = $.extend(options, {fixedWidth: $this.data('fixed-width')})
            }
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