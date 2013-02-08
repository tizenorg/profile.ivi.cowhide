/* vi: set et sw=4 ts=4 si: */
(function(win, app, Ember) {
    app.Router.map(function() {
        this.resource('all', {path: '/'});
    });

    app.AllRoute = Ember.Route.extend({
        setupController: function(controller) {
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
        model: function() {
            return app.MediaItem.findAll();
        },
    });
}(window, window.Hoofbeats, window.Ember));
