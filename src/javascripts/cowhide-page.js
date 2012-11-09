(function($, undefined) {
    'use strict';

    var ChPage = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            options,
            $.fn.ch_widget.defaults,
            {
                maxWidgets: 0
            });

        var $parent_page = this.$element.parent().closest('div.page');
        if ($parent_page.length !== 0) {
            $.cowhide.fatal('#31: pages cannot be nested.');
        }
    };

    ChPage.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChPage,

            registeredWidgets: 0,
            registerWidget: function(widget) {
                this.registeredWidgets++;
                if (this.options.maxWidgets > 0 &&
                    this.registeredWidgets > this.options.maxWidgets)
                {
                    $.cowhide.fatal("#32: a page cannot have more than " +
                                    this.options.maxWidgets +
                                    " widgets.");
                }
            }
        }
    );

    $.fn.ch_page = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_page'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_page', (data = new ChPage(this, options)));
                data.register();
            }

            if(option == 'register') {
                data.registerWidget();
            }
        });
    };

    $.fn.ch_page.Constructor = ChPage;

    /* CHPAGE DATA-API
     * ================= */
    $(function() {
        $('div.page').ch_page();
    })
})(window.jQuery);