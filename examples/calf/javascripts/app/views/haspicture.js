(function(app, Ember) {
    'use strict';

    var HasPictureMixin = Ember.Mixin.extend({
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

    app.HasPictureMixin = HasPictureMixin;
})(window.Calf, window.Ember);