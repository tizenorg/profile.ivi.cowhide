(function(app, Ember) {
    'use strict';

    var Router = Ember.Router.extend({
        location: 'none',

        showArtists: Ember.Route.transitionTo('artists'),

        root: Ember.Route.extend({
            index: Ember.Route.extend({
                route: '/',
                redirectsTo: 'artists'
            }),

            artists: Ember.Route.extend({
                route: '/artists',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet(
						'library', 'artists', app.Artist.find());
                }
            })
        })
    });

    app.Router = Router;
})(window.Hoofbeats, window.Ember);
