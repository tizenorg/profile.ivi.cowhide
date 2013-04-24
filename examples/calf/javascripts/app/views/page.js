/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function(app, Ember) {
    'use strict';

    var Page = Ember.View.extend({
        didInsertElement: function() {
            this.$()
                .css({opacity: 0})
                .animate({opacity: 1}, 250);
        }
    });

    app.Page = Page;
})(window.Calf, window.Ember);