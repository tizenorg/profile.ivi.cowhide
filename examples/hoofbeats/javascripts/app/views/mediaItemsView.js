/* vi: set et sw=4 ts=4 si: */
(function(app, Ember) {
    var MediaItemsView = Ember.View.extend({
        templateName: 'mediaItems',
        tagName: 'ul',
        classNames: ['mediaItems']
    });

    app.MediaItemsView = MediaItemsView;
})(window.Hoofbeats, window.Ember);
