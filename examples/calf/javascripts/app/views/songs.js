(function(app, Ember) {
    'use strict';

    var SongsView = app.Page.extend({
        templateName: 'songs',
        tagName: 'ul',
        classNames: ['item-list', 'striped']
    });

    app.SongsView = SongsView;
})(window.Calf, window.Ember);