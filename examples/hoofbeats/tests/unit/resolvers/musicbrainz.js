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
    module("hoofbeats-musicbrainz", {
        setup: function() {
        },
        teardown: function() {
        }
    });

    test("get artist data",
    function() {
        var name = "Regina Spektor";
        var promise = MusicBrainz.getArtist(name);
        stop();
        promise.done(function(data) {
            equals(data.name, name, "name matches");
            start();
        });
    });

    test("get artist data, artist not found",
    function() {
        var name = "This artist does not exist";
        var promise = MusicBrainz.getArtist(name);
        stop();
        promise.fail(function() {
            equals(1, 1, "the method failed");
            start();
        });
    });
});
