(function(app, Ember) {
    'use strict';

    var AlbumsView = app.Page.extend({
        templateName: 'albums',
        tagName: 'div',
        classNames: ['library', 'scrollable'],

        didInsertElement: function() {
          this.$().ch_scrollable('enable');
        }
    });

    app.AlbumsView = AlbumsView;
})(window.Calf, window.Ember);
