/* vi: set et sw=4 ts=4 si: */
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
});
