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
                data.forEach(function(item) {
                    console.log("MediaItem.findAll: pushing object.");
                    items.pushObject(app.MediaItem.create(item));
                });
            });

            return items;
        }
    });

    app.MediaItem = MediaItem;
})(window.Hoofbeats, window.Ember);
