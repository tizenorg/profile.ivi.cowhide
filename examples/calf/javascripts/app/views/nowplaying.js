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

    var NowPlayingView = Ember.View.extend({
        templateName: 'now-playing',
        classNames: ['now-playing']
    });

    app.NowPlayingView = NowPlayingView;
})(window.Calf, window.Ember);