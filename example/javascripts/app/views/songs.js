(function(app, Ember) {
    'use strict';

    var SongsView = Ember.View.extend({
        templateName: 'songs',
        tagName: 'ul',
        classNames: ['item-list', 'striped']
    });

    app.SongsView = SongsView;
})(window.Calf, window.Ember);