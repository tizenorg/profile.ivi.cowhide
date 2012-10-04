(function(app, Ember) {
    'use strict';

    var NowPlayingController = Ember.Controller.extend({
        picture: "images/data/calf.jpg",

        setPicture: function(filename) {
            this.set("picture", "images/data/" + filename);
        },
        unsetPicture: function() {
            this.set("picture", "images/data/calf.jpg");
        }
    });

    app.NowPlayingController = NowPlayingController;
    app.nowPlayingController = NowPlayingController.create();
})(window.Calf, window.Ember);