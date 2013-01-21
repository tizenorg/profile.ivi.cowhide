$(function() {
    module("hoofbeats-library", {
        setup: function() {
            window._requestFileSystem = window.requestFileSystem;
            window._webkitRequestFileSystem = window.webkitRequestFileSystem;
        },
        teardown: function() {
            window.requestFileSystem = window._requestFileSystem;
            window.webkitRequestFileSystem = window.webkitRequestFileSystem;
        }
    });

    test("set root", function() {
        s = "/path/to/media/";
        lib = new HoofbeatsLibrary();
        lib.root = s;
        equal(lib.root, s, "root is correctly set");
    });

    test("load when root is not defined", function() {
        lib = new HoofbeatsLibrary();
        raises(function() {
            lib.load();
        }, Error, "load throws Error");
    });

    test("load when browser doesn't support file system operations",
    function() {
        lib = new HoofbeatsLibrary();
        lib.root = "/";
        window.requestFileSystem = undefined;
        window.webkitRequestFileSystem = undefined;
        raises(function() {
            lib.load();
        }, Error, "load throws Error");
    })
});
