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

    var HasPictureMixin = Ember.Mixin.extend({
        mouseEnter: function(e) {
            var npc = app.get('router').get('nowPlayingController');
            var picture = this.get('content').get('picture');

            if (picture)
                npc.setPicture(picture);
        },

        mouseLeave: function(e) {
            var npc = app.get('router').get('nowPlayingController');
            npc.unsetPicture();
        }
    });

    app.HasPictureMixin = HasPictureMixin;
})(window.Calf, window.Ember);