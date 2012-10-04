(function(app, Ember) {
    'use strict';

    var ArtistView = Ember.View.extend(app.HasPictureMixin, {
        templateName: 'artist',
        tagName: 'li',
        classNames: ['artist']
    });

    app.ArtistView = ArtistView;
})(window.Calf, window.Ember);