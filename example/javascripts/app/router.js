(function(app, Ember) {
    'use strict';

    var Router = Ember.Router.extend({
        location: 'none',
        root: Ember.Route.extend({
            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function(router) {
                    var controller = router.get('applicationController');
                    controller.connectOutlet('artists');
                }
            })
        })
    });

    app.Router = Router;
})(window.Calf, window.Ember);
