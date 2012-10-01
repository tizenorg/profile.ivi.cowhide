(function(app, Ember) {
    'use strict';

    var ArtistView = Ember.View.extend({
        templateName: 'artist',
        tagName: 'span',
        classNames: ['artist']
    });

    app.ArtistView = ArtistView;
})(window.Calf, window.Ember);