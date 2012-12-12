(function($, undefined) {
    'use strict';

    var ChScrollable = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            options,
            $.fn.ch_widget.defaults,
            {
            });
    };

    ChScrollable.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChScrollable,

            enable: function() {
              this.$element.mCustomScrollbar();
            }
        }
    );

    $.fn.ch_scrollable = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_scrollable'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_scrollable', (data = new ChScrollable(this, options)));
                data.register();
            }

            if(typeof option == 'string')
                data[option]();
        });
    };

    $.fn.ch_page.Constructor = ChScrollable;

    /* CHSCROLLABLE DATA-API
     * ================= */
    $(function() {
        $('div.ch-scrollable').ch_scrollable('enable');
    })
})(window.jQuery);
