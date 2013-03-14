/* vi: set et sw=4 ts=4 si: */
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
            ok(lib.size > 0, "there are items in the library");
            start();
        });
    });

    test("successful scan without resolving", function() {
        var lib = new HoofbeatsLibrary();
        stop();
        lib.scan({resolve: false}).then(function() {
            ok(lib.resolve == false, "lib.resolve is false");
            start();
        });
    });

    test("scan with count", function() {
        var lib = new HoofbeatsLibrary();
        stop();
        lib.scan({count: 1}).then(function() {
            ok(lib.size == 1, "there is one item in the library");
            start();
        });
    });

    test("get one item", function() {
        var lib = new HoofbeatsLibrary(),
            item_id = 'e7e7023b-54b3-41d5-b4a1-aa24498e0572';

        stop();
        lib.scan({count: 1}).then(function() {
            var item = lib.item(item_id);
            ok(item !== undefined, "item was found");
            ok(item.id == item_id, "correct item was found");
            start();
        });
    });
});
