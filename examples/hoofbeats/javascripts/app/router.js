/* vi: set et sw=4 ts=4 si: */
/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function(win, app, Ember) {
    app.Router.map(function() {
        this.resource('all', {path: '/'});
    });

    app.AllRoute = Ember.Route.extend({
        setupController: function(controller) {
            var self = this;

            if (app.library !== null) {
                return;
            }

            if (win.HoofbeatsLibrary) {
                app.library = new win.HoofbeatsLibrary();
            } else {
                setTimeout(function() {
                    self.initLibrary();
                }, 100);
            }
        },
        model: function() {
            return app.MediaItem.findAll();
        },
    });
}(window, window.Hoofbeats, window.Ember));
