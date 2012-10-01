(function(app, Ember, _) {
    'use strict';

    var ArtistsController = Ember.ArrayController.extend({
        content: [],
        sortProperties: ['lastName', 'firstName', 'bandName'],

        init: function() {
            var self = this;
            var data = [];

            _.each(app.Store.data, function(artist) {
                self.pushObject(app.Store.getArtist(artist));
            });
        }
    });

    app.ArtistsController = ArtistsController;
})(window.Calf, window.Ember, window._);