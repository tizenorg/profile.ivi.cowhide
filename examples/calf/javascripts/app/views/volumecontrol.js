(function(app, Ember) {
    'use strict';

    var VolumeControlView = Ember.View.extend({
        templateName: 'volume-control',
        classNames: ['volume-control', 'modal', 'fade', 'hide'],

        didInsertElement: function() {
            this.$().modal({
                keyboard: false,
                backdrop: 'static',
                show: false
            });
            this.$('.ch-slider-vertical').ch_slider({
                orientation: "vertical",
                min: "0",
                max: "10",
                value: "5"
            });
            this.$('.ch-seat-selector').ch_seat_selector();
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