$(function() {
    module("hoofbeats-library", {
        setup: function() {
            window._tizen = window.tizen;
        },
        teardown: function() {
            window.tizen = window._tizen;
        }
    });

    test("scan when browser doesn't support Tizen web api",
    function() {
        var lib = new HoofbeatsLibrary();
        window.tizen = undefined;
        raises(function() {
            lib.scan();
        }, Error, "scan throws Error");
    });

    test("successful scan", function() {
        var lib = new HoofbeatsLibrary();
		stop();
        lib.scan().then(function() {
			ok(lib.mediaItems.length > 0, "there are items in the library");
			start();
		});
    });
});
