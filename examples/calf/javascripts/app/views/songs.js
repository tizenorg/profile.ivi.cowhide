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

    var SongsView = app.Page.extend({
        templateName: 'songs',
        tagName: 'div',
        classNames: ['library', 'scrollable'],

        didInsertElement: function() {
          this.$().ch_scrollable('enable');
        }
    });

    app.SongsView = SongsView;
})(window.Calf, window.Ember);
