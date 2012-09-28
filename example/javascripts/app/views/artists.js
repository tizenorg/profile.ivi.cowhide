(function(app, Ember) {
    'use strict';

    var ArtistsView = Ember.View.extend({
        templateName: 'artists',
        tagName: 'ul',
        classNames: ['item-list', 'striped']
    });

    app.ArtistsView = ArtistsView;
})(window.Calf, window.Ember);