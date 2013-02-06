/* vi: set et sw=4 ts=4 si: */
(function(app, Ember) {
    var MediaItemsView = Ember.View.extend({
        templateName: 'mediaItems',
        classNames: ['mediaItems ch-simple-scrollable'],

        didInsertElement: function() {
            this.$().ch_simple_scrollable('enable');
        }
    });

    app.MediaItemsView = MediaItemsView;
})(window.Hoofbeats, window.Ember);
