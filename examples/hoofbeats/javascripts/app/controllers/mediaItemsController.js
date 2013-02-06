(function(app, Ember, _) {
    var MediaItemsController = Ember.ArrayController.extend({
        content: [],
    });

    app.MediaItemsController = MediaItemsController;
    app.mediaItemsController = MediaItemsController.create();
})(window.Hoofbeats, window.Ember);
