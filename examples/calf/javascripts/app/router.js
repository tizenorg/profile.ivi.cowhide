/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

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

            showVolumeControl: function(router) {
                var controller = router.get('volumeControlController');
                controller.set("display", true);
            },

            hideVolumeControl: function(router) {
                var controller = router.get('volumeControlController');
                controller.set("display", false);
            },

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
                    controller.connectOutlet('volume_control', 'volumeControl');
                }
            }),

            artists_albums: Ember.Route.extend({
                route: '/artist/:artist_id/albums',
                connectOutlets: function (router, artist) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'albums', app.Album.find(artist));
                    controller.connectOutlet('now_playing', 'nowPlaying');
                    controller.connectOutlet('volume_control', 'volumeControl');
                }
            }),

            albums: Ember.Route.extend({
                route: '/albums',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'albums', app.Album.find());
                    controller.connectOutlet('now_playing', 'nowPlaying');
                    controller.connectOutlet('volume_control', 'volumeControl');
                }
            }),

            albums_songs: Ember.Route.extend({
                route: '/albums/:album_id/songs',
                connectOutlets: function(router, album) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'songs', app.Song.find(album));
                    controller.connectOutlet('now_playing', 'nowPlaying');
                    controller.connectOutlet('volume_control', 'volumeControl');
                }
            }),

            songs: Ember.Route.extend({
                route: '/songs',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('library', 'songs', app.Song.find());
                    controller.connectOutlet('now_playing', 'nowPlaying');
                    controller.connectOutlet('volume_control', 'volumeControl');
                }
            })
        })
    });

    app.Router = Router;
})(window.Calf, window.Ember);
