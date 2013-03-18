(function(app, Ember) {
    var MediaItem = Ember.Object.extend({
        id: null,
        title: null,
        artists: null,
        duration: null,

        durationString: function() {
            return moment("0", "ss").add('milliseconds', this.duration).format("mm:ss");
        }.property('duration')
    });


    MediaItem.reopenClass({
        findAll: function() {
            var items = [];

            console.log("MediaItem.findAll: entered.");
            app.Store.getMediaItems().done(function(data) {
                if (data !== undefined) {
                    data.forEach(function(item) {
                        console.log("MediaItem.findAll: pushing object.");
                        items.pushObject(app.MediaItem.create(item));
                    });
                }
            });

            return items;
        },

        find: function(item_id) {
            var item;

            console.log("MediaItem.find: entered.");
            app.Store.getMediaItem(item_id).done(function(data) {
                item = app.MediaItem.create(data);
            });

            return item;
        }
    });

    app.MediaItem = MediaItem;
})(window.Hoofbeats, window.Ember);
