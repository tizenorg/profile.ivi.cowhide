$(function () {

    module("cowhide-header")

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
