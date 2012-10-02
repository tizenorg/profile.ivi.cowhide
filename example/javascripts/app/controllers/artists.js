(function(app, Ember, _) {
    'use strict';

    var ArtistsController = Ember.ArrayController.extend({
        content: [],
        sortProperties: ['lastName', 'firstName', 'bandName']
    });

    app.ArtistsController = ArtistsController;
    app.artistsController = ArtistsController.create();
})(window.Calf, window.Ember, window._);