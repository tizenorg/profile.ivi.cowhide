/* vi: set et sw=4 ts=4 si: */
(function(app) {
    var Store = function() {
        this.reset();
        this.scan();
    }

    Store.prototype = {
        reset: function() {
            this.scanCompleted = false;
        },

        scan: function() {
            var self = this;

            if (self.scanCompleted) {
                return;
            }

            if (app.library) {
                app.library.scan().then(function() {
                    self.scanCompleted = true;
                });
            } else {
                setTimeout(function() {
                    self.scan();
                }, 100);
            }
        },

        getArtists: function() {
            var artists = [];
            return artists;
        }
    };

    app.Store = new Store();
})(window.Hoofbeats);
