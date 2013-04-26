$(function () {

    module("cowhide-core", {
      setup: function() {
        // Resets the driving state
        $.cowhide.setDrivingMode(false)
        $.cowhide.setNightMode(false)
      }
    })

      test("setNightMode should work", function () {
        equal($.cowhide.nightMode, false, "nightMode is false")
        $.cowhide.setNightMode(true)
        equal($.cowhide.nightMode, true, "nightMode is true")
      })

      test("toggleNightMode should work", function () {
        equal($.cowhide.nightMode, false, "nightMode is false")
        $.cowhide.toggleNightMode()
        equal($.cowhide.nightMode, true, "nightMode is true")
      })

      test("setDrivingMode should work", function () {
        equal($.cowhide.drivingMode, false, "drivingMode is false")
        $.cowhide.setDrivingMode(true)
        equal($.cowhide.drivingMode, true, "drivingMode is true")
      })

      test("toggleDrivingMode should work", function () {
        equal($.cowhide.drivingMode, false, "drivingMode is false")
        $.cowhide.toggleDrivingMode()
        equal($.cowhide.drivingMode, true, "drivingMode is true")
      })
})
