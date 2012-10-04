(function(app, Ember) {
    'use strict';

    var SongsController = Ember.ArrayController.extend({
        content: [],
        sortProperties: ['title']
    });

    app.SongsController = SongsController;
    app.songsController = SongsController.create();
})(window.Calf, window.Ember);