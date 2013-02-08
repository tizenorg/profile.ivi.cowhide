/* vi: set et sw=4 ts=4 si: */
(function(app, Ember) {
    var AllView = Ember.View.extend({
        templateName: 'all',
        classNames: ['mediaItems ch-simple-scrollable'],

        didInsertElement: function() {
            this.$().ch_simple_scrollable('enable');
        }
    });

    app.AllView = AllView;
})(window.Hoofbeats, window.Ember);
