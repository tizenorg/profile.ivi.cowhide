(function(app, Ember) {
    'use strict';

    var NowPlayingView = Ember.View.extend({
        templateName: 'now-playing',
        classNames: ['now-playing']
    });

    app.NowPlayingView = NowPlayingView;
})(window.Calf, window.Ember);