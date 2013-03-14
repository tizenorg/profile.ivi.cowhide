/* vi: set et sw=4 ts=4 si: */
(function(win, $) {
    var library = function() {
        // For readability:
        this.initialized = false;

        // Whether items should be resolved on MusicBrainz
        this.resolve = false;

        this.fetchCount = 100;
        this.fetchOffset = 0;
        this.oneTime = false;
        this.mediaItems = [];

        this.initialize = function() {
            if (this.initialized)
                return;

            if (win.tizen === undefined) {
                throw Error("You need the Tizen web API  to run Hoofbeats.");
            }

            this.audioTypeFilter = new tizen.AttributeFilter(
                "type", "EXACTLY", "AUDIO");
            this.videoTypeFilter = new tizen.AttributeFilter(
                "type", "EXACTLY", "VIDEO");
            this.typeFilter = new tizen.CompositeFilter(
                "UNION", [this.audioTypeFilter, this.videoTypeFilter]);
        };

        this.scan = function(options) {
            var opts = options || {};
            if (opts.resolve !== undefined) {
                this.resolve = opts.resolve;
            }

            this.deferred = new $.Deferred();
            this.initialize()

            this.mediaItems = [];
            this.fetchOffset = 0;

            if (opts.count !== undefined) {
                this.fetchCount = opts.count;
                this.oneTime = true;
            }

            tizen.content.find(
                this.findCB.bind(this),
                this.errorCB.bind(this),
                null,
                this.typeFilter,
                null,
                this.fetchCount,
                this.fetchOffset);

            return this.deferred.promise();
        };

        this.errorCB = function(error) {
            console.log("HoofbeatsLibrary.errorCB: " + error.name);
            this.deferred.reject();
            throw new Error(error.name);
        };

        this.findCB = function(items) {
            var self = this;

            items.forEach(function(item, index, items) {
                self.mediaItems.push(item);
                if (self.resolve) {
                    win.MusicBrainz.getArtist(item.artists[0]).done(function(data) {
                        console.log(
                            "HoofbeatsLibrary.findCB: " +
                            "item resolved on MusicBrainz: " +
                            data.name);
                    });
                }
            });

            if (items.length == this.fetchCount && !this.oneTime) {
                // There *might* be more items.
                this.fetchOffset += this.fetchCount;
                tizen.content.find(
                    this.findCB.bind(this),
                    this.errorCB.bind(this),
                    null,
                    this.typeFilter,
                    null,
                    this.fetchCount,
                    this.fetchOffset);
            } else {
                self.deferred.resolve();
            }
        };

        this.item = function(id) {
            var ret;

            this.mediaItems.forEach(function(item, index, items) {
                if (item.id == id)
                    ret = item;
            });

            return ret;
        };
    };

    library.prototype = {
        set initialized(value) {this._initialized = value; },
        get initialized() { return this._initialized; },
        get items() { return this.mediaItems; },
        get size() { return this.mediaItems.length; }
    };

    win.HoofbeatsLibrary = library;
}(window, jQuery));
