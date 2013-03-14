/* vi: set et sw=4 ts=4 si: */
(function(win, $) {
    var library = function() {
        // Private stuff

        var p = {
            initialized: false,
            deferred: undefined,
            // Whether items should be resolved on MusicBrainz
            resolve: false,
            fetchCount: 100,
            fetchOffset: 0,
            oneTime: false,
            mediaItems: [],

            errorCB: function(error) {
                console.log("HoofbeatsLibrary.errorCB: " + error.name);
                this.deferred.reject();
                throw new Error(error.name);
            },

            findCB: function(items) {
                items.forEach(function(item, index, items) {
                    p.mediaItems.push(item);
                    if (p.resolve) {
                        win.MusicBrainz.getArtist(item.artists[0]).done(
                            function(data) {
                                console.log(
                                    "HoofbeatsLibrary.findCB: " +
                                    "item resolved on MusicBrainz: " +
                                    data.name);
                            }
                        );
                    }
                });

                if (items.length == p.fetchCount && !p.oneTime) {
                    // There *might* be more items.
                    p.fetchOffset += p.fetchCount;
                    tizen.content.find(
                        p.findCB.bind(this),
                        p.errorCB.bind(this),
                        null,
                        p.typeFilter,
                        null,
                        p.fetchCount,
                        p.fetchOffset);
                } else {
                    p.deferred.resolve();
                }
            }
        }; // p


        // Public stuff

        return {
            initialize: function() {
                if (p.initialized)
                    return;

                if (win.tizen === undefined) {
                    throw Error("You need the Tizen web API  to run Hoofbeats.");
                }

                p.audioTypeFilter = new tizen.AttributeFilter(
                    "type", "EXACTLY", "AUDIO");
                p.videoTypeFilter = new tizen.AttributeFilter(
                    "type", "EXACTLY", "VIDEO");
                p.typeFilter = new tizen.CompositeFilter(
                    "UNION", [p.audioTypeFilter, p.videoTypeFilter]);
            },

            scan: function(options) {
                var opts = options || {};
                if (opts.resolve !== undefined) {
                    p.resolve = opts.resolve;
                }

                p.deferred = new $.Deferred();
                this.initialize();

                p.mediaItems = [];
                p.fetchOffset = 0;

                if (opts.count !== undefined) {
                    p.fetchCount = opts.count;
                    p.oneTime = true;
                }

                tizen.content.find(
                    p.findCB.bind(this),
                    p.errorCB.bind(this),
                    null,
                    p.typeFilter,
                    null,
                    p.fetchCount,
                    p.fetchOffset);

                return p.deferred.promise();
            },

            item: function(id) {
                var ret;

                p.mediaItems.forEach(function(item, index, items) {
                    if (item.id == id)
                        ret = item;
                });

                return ret;
            },

            // Some simple getters
            getInitialized: function() { return p.initialized; },
            getItems: function() { return p.mediaItems; },
            getSize: function() { return p.mediaItems.length; },
            getResolve: function() {return p.resolve; }
        };
    };

    win.HoofbeatsLibrary = library;
}(window, jQuery));
