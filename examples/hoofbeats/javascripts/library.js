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
            this.mediaSource = tizen.mediacontent.getLocalMediaSource();
        };

        this.scan = function() {
            this.initialize()

            this.mediaItems = [];
            this.fetchOffset = 0;

            this.mediaSource.findItems(
                this.findItemsCB.bind(this),
                this.errorCB.bind(this),
                null,
                this.typeFilter,
                this.sortMode,
                this.fetchCount,
                this.fetchOffset);
        };

        this.errorCB = function(error) {
            console.log("Error: " + error.name);
            throw new Error(error.name);
        };

        this.findItemsCB = function(items) {
            var self = this;

            items.forEach(function(item, index, items) {
                self.mediaItems.push(item);
                console.log("Item added to the library: " + item.title);
            });

            if (items.length == this.fetchCount) {
                // There *might* be more items.
                this.fetchOffset += this.fetchCount;
                this.mediaSource.findItems(
                    this.findItemsCB.bind(this),
                    this.errorCB.bind(this),
                    null,
                    this.typeFilter,
                    this.sortMode,
                    this.fetchCount,
                    this.fetchOffset);
            }
        };
    };

    library.prototype = {
        set initialized(value) {this._initialized = value; },
        get initialized() { return this._initialized; }
    };

    window.HoofbeatsLibrary = library;
});
