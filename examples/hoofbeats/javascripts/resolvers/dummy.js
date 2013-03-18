/* vi: set et sw=4 ts=4 si: */
(function(win, $) {
    var dummyResolver = function() {
        return {
            name: function() { return "DummyResolver"; },

            getArtist: function(q) {
                return new $.Deferred().resolve({
                    name: 'Regina Spektor'
                });
            }
        };
    };

    win.DummyResolver = new dummyResolver();
}(window, jQuery));
