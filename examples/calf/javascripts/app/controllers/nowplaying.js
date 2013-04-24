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

    var NowPlayingController = Ember.Controller.extend({
        picture: "images/data/calf.jpg",

        setPicture: function(filename) {
            this.set("picture", "images/data/" + filename);
        },
        unsetPicture: function() {
            this.set("picture", "images/data/calf.jpg");
        }
    });

    app.NowPlayingController = NowPlayingController;
    app.nowPlayingController = NowPlayingController.create();
})(window.Calf, window.Ember);