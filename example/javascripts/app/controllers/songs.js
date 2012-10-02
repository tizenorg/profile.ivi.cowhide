(function(app, Ember, _) {
    'use strict';

    var SongsController = Ember.ArrayController.extend({
        content: [],
        sortProperties: ['title'],

        init: function() {
            var self = this;
            var data = [];

            _.each(app.Store.getSongs(), function(song) {
                self.pushObject(song);
            });
        }
    });

    app.SongsController = SongsController;
    app.songsController = SongsController.create();
})(window.Calf, window.Ember, window._);