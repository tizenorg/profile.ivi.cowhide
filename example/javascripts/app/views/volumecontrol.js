(function(app, Ember) {
    'use strict';

    var VolumeControlView = Ember.View.extend({
        templateName: 'volume-control',
        classNames: ['modal', 'fade', 'hide'],

        didInsertElement: function() {
            this.$().modal({
                keyboard: false,
                backdrop: 'static',
                show: false
            });
        },

        displayChanged: function() {
            var display = this.get("controller.display");
            var $el = this.$();

            // Checking for this because contentChanged will be called for
            // the first time before the view is rendered to the DOM.
            if ($el !== undefined) {
                if(display) {
                    this.$().modal('show');
                } else {
                    this.$().modal('hide');
                }
            }
        }.observes("controller.display")
    });

    app.VolumeControlView = VolumeControlView;
})(window.Calf, window.Ember);