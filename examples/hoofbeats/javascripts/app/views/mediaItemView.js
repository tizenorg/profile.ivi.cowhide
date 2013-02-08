/* vi: set et sw=4 ts=4 si: */
(function(app, Ember) {
    var MediaItemView = Ember.View.extend({
        templateName: 'mediaItem',
        classNames: ['mediaItem']
    });

    app.MediaItemView = MediaItemView;
})(window.Hoofbeats, window.Ember);
