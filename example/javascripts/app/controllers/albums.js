(function(app, Ember, _) {
    'use strict';

    var AlbumsController = Ember.ArrayController.extend({
        content: [],
        sortProperties: ['name'],

        init: function() {
            var self = this;
            var data = [];

            _.each(app.Store.getAlbums(), function(album) {
                self.pushObject(album);
            });
        }
    });

    app.AlbumsController = AlbumsController;
    app.albumsController = AlbumsController.create();
})(window.Calf, window.Ember, window._);