(function(app, Ember) {
    'use strict';

    var AlbumView = Ember.View.extend({
        templateName: 'album',
        tagName: 'span',
        classNames: ['album']
    });

    app.AlbumView = AlbumView;
})(window.Calf, window.Ember);