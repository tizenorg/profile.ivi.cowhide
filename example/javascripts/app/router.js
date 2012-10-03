(function(app, Ember) {
    'use strict';

    var Router = Ember.Router.extend({
        location: 'hash',

        root: Ember.Route.extend({
            showArtists: Ember.Route.transitionTo('artists'),
            showArtistsAlbums: Ember.Router.transitionTo('artists_albums'),

            showAlbums: Ember.Route.transitionTo('albums'),
            showAlbumsSongs: Ember.Route.transitionTo('albums_songs'),
            showSongs: Ember.Route.transitionTo('songs'),

            index: Ember.Route.extend({
                route: '/',
                redirectsTo: 'artists'
            }),

            artists: Ember.Route.extend({
                route: '/artists',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'artists', app.Artist.find());
                    controller.connectOutlet('now_playing', 'nowPlaying');
                }
            }),

            artists_albums: Ember.Route.extend({
                route: '/artist/:artist_id/albums',
                connectOutlets: function (router, artist) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'albums', app.Album.find(artist));
                    controller.connectOutlet('now_playing', 'nowPlaying');
                }
            }),

            albums: Ember.Route.extend({
                route: '/albums',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'albums', app.Album.find());
                    controller.connectOutlet('now_playing', 'nowPlaying');
                }
            }),

            albums_songs: Ember.Route.extend({
                route: '/albums/:album_id/songs',
                connectOutlets: function(router, album) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'songs', app.Song.find(album));
                    controller.connectOutlet('now_playing', 'nowPlaying');
                }
            }),

            songs: Ember.Route.extend({
                route: '/songs',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'songs', app.Song.find());
                    controller.connectOutlet('now_playing', 'nowPlaying');
                }
            })
        })
    });

    app.Router = Router;
})(window.Calf, window.Ember);
