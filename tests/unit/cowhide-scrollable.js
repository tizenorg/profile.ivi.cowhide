$(function () {

    module("cowhide-scrollable")

      test("widget has been made scrollable", function () {
        var page = $('<div class="page"></div>')
        var scrollable = $('<div class="ch-scrollable"></div>')

        scrollable.appendTo(page)
        scrollable.ch_scrollable('enable')

        ok(scrollable.hasClass('mCustomScrollbar'), "element has mCustomScrollbar class")
      })
})
