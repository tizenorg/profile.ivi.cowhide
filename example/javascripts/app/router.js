(function(app, Ember) {
    'use strict';

    var Router = Ember.Router.extend({
        location: 'hash',

        root: Ember.Route.extend({
            showArtists: Ember.Route.transitionTo('artists'),
            showAlbums: Ember.Route.transitionTo('albums'),

            index: Ember.Route.extend({
                route: '/',
                redirectsTo: 'artists'
            }),

            artists: Ember.Route.extend({
                route: '/artists',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('artists');
                }
            }),

            albums: Ember.Route.extend({
                route: '/albums',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('albums');
                }
            })
        })
    });

    app.Router = Router;
})(window.Calf, window.Ember);
