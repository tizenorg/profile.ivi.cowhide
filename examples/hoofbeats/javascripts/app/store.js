(function(app) {
    'use strict';

    var Store = function() {}

    Store.prototype = {
        getArtists: function() {
            var artists = [];
            return artists;
        }
    };

    app.Store = new Store();
})(window.Hoofbeats);