(function(app, Ember, _) {
    'use strict';

    var Album = Ember.Object.extend({
        id: null,
        artist: null,
        name: null,
        year: null
    });

    Album.reopenClass({
        find: function(artist) {
            return app.Store.getAlbums(artist);
        }
    });

    app.Album = Album;
})(window.Calf, window.Ember, window._);
