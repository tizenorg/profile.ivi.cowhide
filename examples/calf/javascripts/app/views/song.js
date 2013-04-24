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

    var SongView = Ember.View.extend({
        templateName: 'song',
        tagName: 'span',
        classNames: ['song']
    });

    app.SongView = SongView;
})(window.Calf, window.Ember);