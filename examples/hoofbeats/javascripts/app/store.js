/* vi: set et sw=4 ts=4 si: */
(function(app, $) {
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

            console.log("Store.scan: entered.");
            if (app.library) {
                app.library.scan().then(function() {
                    self.scanCompleted = true;
                    console.log(
                        "Store.scan: completed. " +
                        app.library.size +
                        " items in the library.");
                });
            } else {
                setTimeout(function() {
                    self.scan();
                }, 100);
            }
        },

        // TODO: make the next two functions into one, to be DRY.
        getMediaItems: function(deferred) {
            var self = this,
                d = deferred || new $.Deferred();

            console.log("Store.getMediaItems: entered.");
            if (self.scanCompleted) {
                console.log("Store.getMediaItems: scan is completed, resolving promise.");
                deferred.resolve(app.library.items);
            } else {
                // If the scan is not completed, we must be still scanning.
                console.log("Store.getMediaItems: scan still pending. Trying again later.");
                setTimeout(function() {
                    return self.getMediaItems(d);
                }, 100);
            }

            return d.promise();
        },

        getMediaItem: function(item_id, deferred) {
            var self = this,
                d = deferred || new $.DeferreD();

            console.log("Store.getMediaItem: entered.");
            if (self.scanCompleted) {
                console.log("Store.getMediaITem: scan is completed, resolving promise.");
                d.resolve(app.library.item(item_id);
            } else {
                // If the scan is not completed, we must be still scanning.
                console.log("Store.getMediaItem: scan still pending. Trying again later.");
                setTimeout(function() {
                    return self.getMediaItem(item_id, deferred);
                }, 100);
            }
        }
    };

    app.Store = new Store();
})(window.Hoofbeats, window.jQuery);
