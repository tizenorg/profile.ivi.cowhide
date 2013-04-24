/* vi: set et sw=4 ts=4 si: */
/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function(app, Ember) {
    var AllView = Ember.View.extend({
        templateName: 'all',
        classNames: ['mediaItems ch-simple-scrollable'],

        didInsertElement: function() {
            this.$().ch_simple_scrollable('enable');
        }
    });

    app.AllView = AllView;
})(window.Hoofbeats, window.Ember);
