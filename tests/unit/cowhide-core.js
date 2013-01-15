$(function () {

    module("cowhide-core", {
      setup: function() {
        // Resets the driving state
        $.cowhide.setDrivingMode(false)
        $.cowhide.setNightMode(false)
      }
    })

      test("setNightMode should work", function () {
        equals($.cowhide.nightMode, false, "nightMode is false")
        $.cowhide.setNightMode(true)
        equals($.cowhide.nightMode, true, "nightMode is true")
      })

      test("toggleNightMode should work", function () {
        equals($.cowhide.nightMode, false, "nightMode is false")
        $.cowhide.toggleNightMode()
        equals($.cowhide.nightMode, true, "nightMode is true")
      })

      test("setDrivingMode should work", function () {
        equals($.cowhide.drivingMode, false, "drivingMode is false")
        $.cowhide.setDrivingMode(true)
        equals($.cowhide.drivingMode, true, "drivingMode is true")
      })

      test("toggleDrivingMode should work", function () {
        equals($.cowhide.drivingMode, false, "drivingMode is false")
        $.cowhide.toggleDrivingMode()
        equals($.cowhide.drivingMode, true, "drivingMode is true")
      })
})
