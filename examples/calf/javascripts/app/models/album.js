/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

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
