(function(app, Ember) {
    'use strict';

    var ArtistsView = app.Page.extend({
        templateName: 'artists',
        tagName: 'div',
        classNames: ['library', 'scrollable'],

        didInsertElement: function() {
          this.$().ch_scrollable('enable');
        }
    });

    app.ArtistsView = ArtistsView;
})(window.Calf, window.Ember);
