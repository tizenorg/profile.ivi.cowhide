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

    var ArtistsController = Ember.ArrayController.extend({
        content: [],
        sortProperties: ['lastName', 'firstName', 'bandName']
    });

    app.ArtistsController = ArtistsController;
    app.artistsController = ArtistsController.create();
})(window.Calf, window.Ember, window._);