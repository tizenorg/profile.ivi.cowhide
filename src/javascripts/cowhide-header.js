(function($, undefined) {
    'use strict';

    var ChHeader = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend({}, options);
    };

    ChHeader.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChHeader,

            show: function() {
                var $this = this.$element, 
                    $h = $('<h1/>').text(this.$element.text());

               $this.html($h);

               if (this.options.show_back_button) {
                    var $back = $('<button/>').addClass('btn');
                    var $icon = $('<i/>').addClass('icon-backward');

                    $back.html($icon);

                    $this.append($back);

                    $back.click(function(e) {
                        e.preventDefault();
                        $this.trigger($.Event('back'));
                    });
                }
            }
        }
    );

    $.fn.ch_header = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_header'),
                options = typeof option == 'object' && option;

            if ($this.data('show-back-button')) {
                options = $.extend(options, {show_back_button: true});
            }

            if (!data) {
                $this.data('ch_header', (data = new ChHeader(this, options)));
                data.register();
            }

            if (typeof option == 'string')
                data[option]();
        });
    };

    $.fn.ch_button.Constructor = ChHeader;

    /* CHHEADER DATA-API
     * ================= */
    $(function() {
        $('.ch-header').ch_header('show');
    })
})(window.jQuery);
