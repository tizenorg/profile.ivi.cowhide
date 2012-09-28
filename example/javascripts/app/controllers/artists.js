(function(app, Ember) {
    'use strict';

    var ArtistsController = Ember.ArrayController.extend({
        content: [
            {
                firstName: 'Regina',
                lastName: 'Spektor'
            },
            {
                firstName: 'Ani',
                lastName: 'DiFranco'
            },
            {
                firstName: 'Casey',
                lastName: 'Dienel'
            }
        ]
    });

    app.ArtistsController = ArtistsController;
})(window.CowhideMusic, window.Ember);