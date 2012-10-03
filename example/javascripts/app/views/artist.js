(function(app, Ember) {
    'use strict';

    var ArtistView = Ember.View.extend({
        templateName: 'artist',
        tagName: 'li',
        classNames: ['artist'],

        mouseEnter: function(e) {
            var npc = app.get('router').get('nowPlayingController');
            var picture = this.get('content').get('picture');

            if (picture)
                npc.setPicture(picture);
        },

        mouseLeave: function(e) {
            var npc = app.get('router').get('nowPlayingController');
            npc.unsetPicture();
        }
    });

    app.ArtistView = ArtistView;
})(window.Calf, window.Ember);