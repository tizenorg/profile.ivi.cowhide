/* vi: set et sw=4 ts=4 si: */
(function(win, app, Ember) {
    var Router = Ember.Router.extend({
        location: 'none',

        showMediaItems: Ember.Route.transitionTo('mediaItems'),

        initLibrary: function() {
            var self = this;

            if (app.library !== null) {
                return;
            }

            if (win.HoofbeatsLibrary) {
                app.library = new win.HoofbeatsLibrary();
            } else {
                setTimeout(function() {
                    self.initLibrary();
                }, 100);
            }

        },

        root: Ember.Route.extend({
            index: Ember.Route.extend({
                route: '/',
                redirectsTo: 'mediaItems'
            }),

            mediaItems: Ember.Route.extend({
                route: '/mediaItems',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    router.initLibrary();
                    controller.connectOutlet(
                        'library', 'mediaItems', app.MediaItem.findAll());
                }
            })
        })
    });

    app.Router = Router;
}(window, window.Hoofbeats, window.Ember));
