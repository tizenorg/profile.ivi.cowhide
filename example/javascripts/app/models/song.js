(function(app, Ember) {
    'use strict';

    var Song = Ember.Object.extend({
        id: null,
        title: null,
        duration: null
    });

    app.Song = Song;
})(window.Calf, window.Ember);
