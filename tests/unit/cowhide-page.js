$(function () {

    module("cowhide-page")

      test("should provide no conflict", function () {
        var button = $.fn.ch_button.noConflict()
        ok(!$.fn.ch_button, 'button was set back to undefined (org value)')
        $.fn.ch_button = button
      })

      test("should be defined on jquery object", function () {
        ok($(document.body).ch_page, 'page method is defined')
      })

      test("pages cannot be nested", function () {
        var page = $('<div class="page"></div>')
        var nested = $('<div class="page"></div>')

        nested.appendTo(page)
        page.ch_page()
        raises(function() {
          nested.ch_page()
        }, Error, "core throws Error")
      })

      test("pages cannot contain more than maxWidgets", function () {
        var page = $('<div class="page"></div>')
        page.ch_page()
        page.ch_page('setMaxWidgets', 1)

        button1 = $('<button>Test</button>')
        button1.appendTo(page)
        button1.ch_button()

        raises(function() {
          button2 = $('<button>Test</button>')
          button2.appendTo(page)
          button2.ch_button()
        }, Error, "core throws Error")
      })
})
