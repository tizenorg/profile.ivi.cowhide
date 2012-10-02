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
                    controller.connectOutlet('artists', app.Artist.find());
                }
            }),

            artists_albums: Ember.Route.extend({
                route: '/artist/:artist_id/albums',
                connectOutlets: function (router, artist) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('albums', app.Album.find(artist));
                }
            }),

            albums: Ember.Route.extend({
                route: '/albums',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('albums', app.Album.find());
                }
            }),

            albums_songs: Ember.Route.extend({
                route: '/albums/:album_id/songs',
                connectOutlets: function(router, album) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('songs', app.Song.find(album));
                }
            }),

            songs: Ember.Route.extend({
                route: '/songs',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('songs', app.Song.find());
                }
            })
        })
    });

    app.Router = Router;
})(window.Calf, window.Ember);
