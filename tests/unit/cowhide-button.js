$(function () {

    module("cowhide-buttons", {
      setup: function() {
        // Resets the driving state
        $.cowhide.setDrivingMode(false)
      }
    })

      test("should be disabled when driving", function () {
        var page = $('<div class="page"></div>')
        var btn = $('<button class="btn">test</button>')
        btn.appendTo(page)
        btn.ch_button()
        $.cowhide.setDrivingMode(true)
        stop()
        setTimeout(function () {
          ok(btn.attr('disabled'), 'btn is disabled')
          ok(btn.hasClass('disabled'), 'btn has disabled class')
          start()
        }, 0)
      })

      test("should have marquee element if marquee is enabled", function() {
        var page = $('<div class="page"></div>')
        var btn = $('<button class="btn" data-marquee="true">this is some really long text, for a button, is it not?</button>')
        btn.appendTo(page)
        btn.ch_button()
        stop()
        setTimeout(function () {
          equals(btn.find('marquee').length, 1, 'marquee tag is present')
          start()
        }, 0)
      })

      test("marquee should be removed when driving", function() {
        var page = $('<div class="page"></div>')
        var btn = $('<button class="btn" data-marquee="true">test</button>')
        btn.appendTo(page)
        btn.ch_button('marquee')
        $.cowhide.setDrivingMode(true)
        stop()
        setTimeout(function () {
          equals(btn.find('marquee').length, 0, 'marquee tag is missing')
          start()
        }, 0)
      })

      test("marquee should be enabled again when driving stops", function() {
        var page = $('<div class="page"></div>')
        var btn = $('<button class="btn" data-marquee="true">test</button>')
        btn.appendTo(page)
        btn.ch_button('marquee')
        $.cowhide.setDrivingMode(true)
        $.cowhide.setDrivingMode(false)
        stop()
        setTimeout(function () {
          equals(btn.find('marquee').length, 1, 'marquee tag is present')
          start()
        }, 0)
      })

      test("should respect fixed width requirement", function() {
        var page = $('<div class="page"></div>')
        var btn = $('<button class="btn" data-fixed-width="200">this is some really long text, for a button, is it not?</button>')
        btn.appendTo(page)
        btn.ch_button()
        stop()
        setTimeout(function () {
          equals(btn.css('width'), '200px', 'width is 200px')
          start()
        }, 0)
      })

      test("should respect minimum font size requirement", function() {
        var page = $('<div class="page"></div>')
        var btn = $('<button class="btn">test</button>')
        btn.appendTo(page)
        btn.ch_button()
        btn.css('font-size', '1px');
        raises(function() {
          $.cowhide.verifyFrameworkRestrictions()
        }, Error, "core throws Error")
      })

      test("should respect maximum font size requirement", function() {
        var page = $('<div class="page"></div>')
        var btn = $('<button class="btn">test</button>')
        btn.appendTo(page)
        btn.ch_button()
        btn.css('font-size', '100px');
        raises(function() {
          $.cowhide.verifyFrameworkRestrictions()
        }, Error, "core throws Error")
      })
})
