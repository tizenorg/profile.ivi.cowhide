(function(app, Ember) {
    'use strict';

    var ArtistsView = app.Page.extend({
        templateName: 'artists',
        tagName: 'ul',
        classNames: ['item-list', 'striped']
    });

    app.ArtistsView = ArtistsView;
})(window.Calf, window.Ember);