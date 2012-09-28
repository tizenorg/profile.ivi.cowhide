(function(app, Ember) {
    'use strict';

    var ArtistsView = Ember.View.extend({
        templateName: 'artists'
    });

    app.ArtistsView = ArtistsView;
})(window.CowhideMusic, window.Ember);