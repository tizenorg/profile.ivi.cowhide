$(function () {

    module("cowhide-simple-scrollable")

      test("widget has been made scrollable", function () {
        var page = $('<div class="page"></div>')
        var scrollable = $('<div class="ch-simple-scrollable"><p>Test</p></div>')

        scrollable.appendTo(page)
        scrollable.ch_simple_scrollable('enable')

        ok(scrollable.find('.ch-simple-scrollable-content').length > 0, "element has ch-simple-scrollable-content child")
      })
})
