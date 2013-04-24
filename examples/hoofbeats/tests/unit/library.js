/* vi: set et sw=4 ts=4 si: */
/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

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
            lib.scan({resolveBackend: DummyResolver});
        }, Error, "scan throws Error");
    });

    test("successful scan", function() {
        var lib = new HoofbeatsLibrary();
        stop();
        lib.scan({resolveBackend: DummyResolver}).then(function() {
            ok(lib.getSize() > 0, "there are items in the library");
            start();
        });
    });

    test("successful scan without resolving", function() {
        var lib = new HoofbeatsLibrary();
        stop();
        lib.scan({resolveBackend: undefined}).then(function() {
            ok(lib.getResolve() == false, "lib.getResolve() is false");
            start();
        });
    });

    test("scan with count", function() {
        var lib = new HoofbeatsLibrary();
        stop();
        lib.scan({count: 1, resolveBackend: DummyResolver}).then(function() {
            ok(lib.getSize() == 1, "there is one item in the library");
            start();
        });
    });

    test("get one item", function() {
        var lib = new HoofbeatsLibrary(),
            item_id = 'e7e7023b-54b3-41d5-b4a1-aa24498e0572';

        stop();
        lib.scan({count: 1, resolveBackend: DummyResolver}).then(function() {
            var item = lib.item(item_id);
            ok(item !== undefined, "item was found");
            ok(item.id == item_id, "correct item was found");
            start();
        });
    });
});
