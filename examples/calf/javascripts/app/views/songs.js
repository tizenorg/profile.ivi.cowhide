(function(app, Ember) {
    'use strict';

    var SongsView = app.Page.extend({
        templateName: 'songs',
        tagName: 'div',
        classNames: ['library', 'scrollable'],

        didInsertElement: function() {
          this.$().ch_scrollable('enable');
        }
    });

    app.SongsView = SongsView;
})(window.Calf, window.Ember);
