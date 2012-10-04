(function(app, Ember) {
    'use strict';

    var SongView = Ember.View.extend({
        templateName: 'song',
        tagName: 'span',
        classNames: ['song']
    });

    app.SongView = SongView;
})(window.Calf, window.Ember);