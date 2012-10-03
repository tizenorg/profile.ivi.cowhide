(function(app, Ember) {
    'use strict';

    var NowPlayingView = Ember.View.extend({
        templateName: 'now-playing'
    });

    app.NowPlayingView = NowPlayingView;
})(window.Calf, window.Ember);