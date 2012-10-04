(function(app, Ember) {
    'use strict';

    var VolumeControlController = Ember.Controller.extend({
        display: false
    });

    app.VolumeControlController = VolumeControlController;
    app.volumeControlController = VolumeControlController.create();
})(window.Calf, window.Ember);