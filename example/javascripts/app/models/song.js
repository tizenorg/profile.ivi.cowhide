(function(app, Ember, _) {
    'use strict';

    var Song = Ember.Object.extend({
        id: null,
        title: null,
        duration: null
    });

    Song.reopenClass({
        find: function(artist, album) {
            return app.Store.getSongs(artist, album);
        }
    });

    app.Song = Song;
})(window.Calf, window.Ember, window._);
