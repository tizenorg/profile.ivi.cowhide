(function(app, Ember, _) {
    'use strict';

    var ArtistsController = Ember.ArrayController.extend({
        content: [],
    });

    app.ArtistsController = ArtistsController;
    app.artistsController = ArtistsController.create();
})(window.Hoofbeats, window.Ember);
