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

            disableMarquee: function() {
                var $marquee = this.$element.find('marquee');
                if($marquee.length > 0) {
                    var text = $marquee.text();
                    $marquee.remove();
                    this.$element.text(text);
                }
            },

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
            },

            onDrivingModeEnter: function() {
                this.disableMarquee();
            },

            onDrivingModeExit: function() {
                this.enableMarquee();
            }
        }
    );


    /* CHBUTTON PLUGIN DEFINITION
     * ========================== */

    var old = $.fn.ch_button;

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
            }

            $this.button(option);
        });
    };

    $.fn.ch_button.Constructor = ChButton;


    /* CHBUTTON NO CONFLICT
     * ==================== */

    $.fn.ch_button.noConflict = function() {
        $.fn.ch_button = old;
        return this;
    };


    /* CHBUTTON DATA-API
     * ================= */

    $(function() {
        $('.btn, button, input[type=button]').ch_button();
    })
})(window.jQuery);
