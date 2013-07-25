$(function () {

    module("cowhide-select", {
      setup: function() {
        // Resets the driving state
        $.cowhide.setDrivingMode(false)
      }
    })

      test("should provide no conflict", function () {
        var select = $.fn.ch_select.noConflict()
        ok(!$.fn.ch_select, 'select was set back to undefined (org value)')
        $.fn.ch_select = select
      })

      test("should be disabled when driving", function () {
        var page = $('<div class="page"></div>')
        var input = $('<select><option>test</option></select>')
        input.appendTo(page)
        input.ch_select()
        $.cowhide.setDrivingMode(true)
        stop()
        setTimeout(function () {
          ok(input.attr('disabled'), 'input is disabled')
          ok(input.hasClass('disabled'), 'input has disabled class')
          start()
        }, 0)
      })
})
