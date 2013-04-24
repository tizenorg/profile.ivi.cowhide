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

    var Song = Ember.Object.extend({
        id: null,
        title: null,
        duration: null
    });

    Song.reopenClass({
        find: function(album) {
            return app.Store.getSongs(album);
        }
    });

    app.Song = Song;
})(window.Calf, window.Ember, window._);
