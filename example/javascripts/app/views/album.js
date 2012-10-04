(function(app, Ember) {
    'use strict';

    var AlbumView = Ember.View.extend(app.HasPictureMixin, {
        templateName: 'album',
        tagName: 'li',
        classNames: ['album']
    });

    app.AlbumView = AlbumView;
})(window.Calf, window.Ember);