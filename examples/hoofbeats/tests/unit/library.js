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
        lib = new HoofbeatsLibrary();
        window.tizen = undefined;
        raises(function() {
            lib.scan();
        }, Error, "scan throws Error");
    });

    test("successful scan", function() {
        lib = new HoofbeatsLibrary();
        lib.scan();
        ok(lib.mediaItems.length > 0, "there are items in the library");
    });

    test("successful scan with promise", function() {
        lib = new HoofbeatsLibrary();
		stop();
        lib.scan().then(function() {
			ok(lib.mediaItems.length > 0, "there are items in the library");
			start();
		});
    });
});
