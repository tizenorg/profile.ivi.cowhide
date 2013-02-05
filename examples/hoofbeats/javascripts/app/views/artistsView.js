/* vi: set et sw=4 ts=4 si: */
(function(app, Ember) {
    'use strict';

    var ArtistsView = Ember.View.extend({
        templateName: 'artists',
        tagName: 'ul',
        classNames: ['artists']
    });

    app.ArtistsView = ArtistsView;
})(window.Hoofbeats, window.Ember);
