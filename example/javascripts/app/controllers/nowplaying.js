(function(app, Ember) {
    'use strict';

    var NowPlayingController = Ember.Controller.extend({
    });

    app.NowPlayingController = NowPlayingController;
    app.nowPlayingController = NowPlayingController.create();
})(window.Calf, window.Ember);