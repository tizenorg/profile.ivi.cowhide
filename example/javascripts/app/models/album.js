(function(app, Ember) {
    'use strict';

    var Album = Ember.Object.extend({
        id: null,
        name: null,
        year: null
    });

    app.Album = Album;
})(window.Calf, window.Ember);
