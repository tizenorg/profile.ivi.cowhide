(function(app, Ember) {
    'use strict';

    var VolumeControlView = Ember.View.extend({
        templateName: 'volume-control',
        classNames: ['volume-control', 'modal', 'fade', 'hide'],

        didInsertElement: function() {
            var $modal = this.$(),
                $sliders = this.$('.ch-slider-vertical'),
                $seats = this.$('.ch-seat-selector');

            $modal.modal({
                keyboard: false,
                backdrop: 'static',
                show: false
            });

            $sliders.ch_slider({
                orientation: "vertical",
                min: "0",
                max: "10",
                value: "5"
            });

            $seats.ch_seat_selector();

            this.$('.ch-slider-vertical.front-left').mouseover(function(e) {
                $seats.ch_seat_selector('frontLeft');
            }).mouseout(function(e) {
                $seats.ch_seat_selector('removeSelection');
            });

            this.$('.ch-slider-vertical.front-right').mouseover(function(e) {
                $seats.ch_seat_selector('frontRight');
            }).mouseout(function(e) {
                $seats.ch_seat_selector('removeSelection');
            });

            this.$('.ch-slider-vertical.rear-left').mouseover(function(e) {
                $seats.ch_seat_selector('rearLeft');
            }).mouseout(function(e) {
                $seats.ch_seat_selector('removeSelection');
            });

            this.$('.ch-slider-vertical.rear-right').mouseover(function(e) {
                $seats.ch_seat_selector('rearRight');
            }).mouseout(function(e) {
                $seats.ch_seat_selector('removeSelection');
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