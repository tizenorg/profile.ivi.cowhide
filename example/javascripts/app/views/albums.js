(function(app, Ember) {
    'use strict';

    var AlbumsView = Ember.View.extend({
        templateName: 'albums',
        tagName: 'ul',
        classNames: ['item-list', 'striped']
    });

    app.AlbumsView = AlbumsView;
})(window.Calf, window.Ember);