$(function () {

    module("cowhide-radio-input", {
      setup: function() {
        // Resets the driving state
        $.cowhide.setDrivingMode(false)
      }
    })

      test("should be disabled when driving", function () {
        var page = $('<div class="page"></div>')
        var input = $('<input type="radio">test</input>')
        input.appendTo(page)
        input.ch_radio_input()
        $.cowhide.setDrivingMode(true)
        stop()
        setTimeout(function () {
          ok(input.attr('disabled'), 'input is disabled')
          ok(input.hasClass('disabled'), 'input has disabled class')
          start()
        }, 0)
      })
})
