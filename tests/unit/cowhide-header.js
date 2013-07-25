$(function () {

    module("cowhide-header")

      test("should provide no conflict", function () {
        var header = $.fn.ch_header.noConflict()
        ok(!$.fn.ch_header, 'header was set back to undefined (org value)')
        $.fn.ch_header = header
      })

      test("should be defined on jquery object", function () {
        ok($(document.body).ch_header, 'header method is defined')
      })

      test("header contains h1 element", function () {
        var page = $('<div class="page"></div>')
        var header = $('<div class="ch-header">Test title</div>')

        header.appendTo(page)
        header.ch_header('show')

        equal(header.find('h1').length, 1, "header contains h1 element")
        equal(header.find('h1').text(), "Test title", "header content matches")
      })

      test("show-back-button works", function () {
        var page = $('<div class="page"></div>')
        var header = $('<div class="ch-header" data-show-back-button="true">Test title</div>')

        header.appendTo(page)
        header.ch_header('show')

        equal(header.find('button i.icon-backward').length, 1, "header contains back button")
      })
})
