/* vi: set et sw=4 ts=4 si: */
(function($, undefined) {
    var ChSimpleScrollable = function(element, options) {
        $.fn.ch_widget.Constructor(element, options);
        this.$element = $(element);
        this.options = $.extend(
            options,
            $.fn.ch_widget.defaults,
            {
            });
    };

    ChSimpleScrollable.prototype = $.extend(
        {},
        $.fn.ch_widget.Constructor.prototype,
        {
            constructor: ChSimpleScrollable,

            enable: function() {
                var self = this,
                    $this = self.$element,
                    $up = $('<div/>').addClass('ch-simple-scrollable-up'),
                    $dn = $('<div/>').addClass('ch-simple-scrollable-dn'),
                    $child =  $this.find('ul, ol, div, p'),
                    scrollAmount;

                $child.addClass('ch-simple-scrollable-content');
                $child.height($child.parent().height() - 160);
                scrollAmount = $child.height() - 40;


                $up.css({top: $child.offset().top});

                $up.html('<a href="#"><i class="icon-chevron-up"></i></a>');
                $dn.html('<a href="#"><i class="icon-chevron-down"></i></a>');

                $dn.click(function() {
                    $child.animate({
                        scrollTop: $child.scrollTop() + scrollAmount
                    }, 200);
                });

                $up.click(function() {
                    $child.animate({
                        scrollTop: $child.scrollTop() - scrollAmount
                    }, 200);
                });


                $up.insertBefore($child);
                $dn.insertAfter($child);
            }
        }
    );


    /* CHSIMPLESCROLLABLE PLUGIN DEFINITION
     * ==================================== */

    var old = $.fn.ch_simple_scrollable;

    $.fn.ch_simple_scrollable = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('ch_simple_scrollable'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('ch_simple_scrollable', (data = new ChSimpleScrollable(this, options)));
                data.register();
            }

            if(typeof option == 'string')
                data[option]();
        });
    };

    $.fn.ch_simple_scrollable.Constructor = ChSimpleScrollable;


    /* CHSIMPLESCROLLABLE NO CONFLICT
     * ============================== */

    $.fn.ch_simple_scrollable.noConflict = function() {
        $.fn.ch_simple_scrollable = old;
        return this;
    };


    /* CHSIMPLESCROLLABLE DATA-API
     * =========================== */

    $(function() {
        $('div.ch-simple-scrollable').ch_simple_scrollable('enable');
    })
})(window.jQuery);
