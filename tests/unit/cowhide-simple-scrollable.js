$(function () {

    module("cowhide-simple-scrollable")

      test("should provide no conflict", function () {
        var simple_scrollable = $.fn.ch_simple_scrollable.noConflict()
        ok(!$.fn.ch_simple_scrollable, 'simple_scrollable was set back to undefined (org value)')
        $.fn.ch_simple_scrollable = simple_scrollable
      })

      test("should be defined on jquery object", function () {
        ok($(document.body).ch_simple_scrollable, 'simple_scrollable method is defined')
      })

      test("widget has been made scrollable", function () {
        var page = $('<div class="page"></div>')
        var scrollable = $('<div class="ch-simple-scrollable"><p>Test</p></div>')

        scrollable.appendTo(page)
        scrollable.ch_simple_scrollable('enable')

        ok(scrollable.find('.ch-simple-scrollable-content').length > 0, "element has ch-simple-scrollable-content child")
      })
})
