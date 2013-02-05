/* vi: set et sw=4 ts=4 si: */
$(function() {
    var library = function() {
        // For readability:
        this.initialized = false;

        this.fetchCount = 100;
        this.fetchOffset = 0;
        this.mediaItems = [];

        this.initialize = function() {
            if (this.initialized)
                return;

            if (window.tizen === undefined) {
                throw Error("You need the Tizen web API  to run Hoofbeats.");
            }

            this.audioTypeFilter = new tizen.AttributeFilter(
                "type", "EXACTLY", "AUDIO");
            this.videoTypeFilter = new tizen.AttributeFilter(
                "type", "EXACTLY", "VIDEO");
            this.typeFilter = new tizen.CompositeFilter(
                "UNION", [this.audioTypeFilter, this.videoTypeFilter]);

            this.sortMode = new tizen.SortMode("trackNumber", "ASC");
        };

        this.scan = function() {
            this.deferred = new $.Deferred();
            this.initialize()

            this.mediaItems = [];
            this.fetchOffset = 0;

            tizen.content.find(
                this.findCB.bind(this),
                this.errorCB.bind(this),
                null,
                this.typeFilter,
                this.sortMode,
                this.fetchCount,
                this.fetchOffset);

            return this.deferred.promise();
        };

        this.errorCB = function(error) {
            console.log("Error: " + error.name);
            this.deferred.reject();
            throw new Error(error.name);
        };

        this.findCB = function(items) {
            var self = this;

            items.forEach(function(item, index, items) {
                self.mediaItems.push(item);
                window.MusicBrainz.getArtist(item.name).done(function(data) {
                    console.log(data);
                });
            });

            if (items.length == this.fetchCount) {
                // There *might* be more items.
                this.fetchOffset += this.fetchCount;
                tizen.content.find(
                    this.findCB.bind(this),
                    this.errorCB.bind(this),
                    null,
                    this.typeFilter,
                    this.sortMode,
                    this.fetchCount,
                    this.fetchOffset);
            } else {
                self.deferred.resolve();
            }
        };
    };

    library.prototype = {
        set initialized(value) {this._initialized = value; },
        get initialized() { return this._initialized; }
    };

    window.HoofbeatsLibrary = library;
});
