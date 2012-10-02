(function(app, Ember) {
    'use strict';

    var AlbumsController = Ember.ArrayController.extend({
        content: [],
        sortProperties: ['name']
    });

    app.AlbumsController = AlbumsController;
    app.albumsController = AlbumsController.create();
})(window.Calf, window.Ember);