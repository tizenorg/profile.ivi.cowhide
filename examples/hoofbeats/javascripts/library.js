/* vi: set et sw=4 ts=4 si: */
(function(win, $) {
    var library = function() {
        // Private stuff

        var _priv = {
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
                    _priv.mediaItems.push(item);
                    if (_priv.resolve) {
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

                if (items.length == _priv.fetchCount && !_priv.oneTime) {
                    // There *might* be more items.
                    _priv.fetchOffset += _priv.fetchCount;
                    tizen.content.find(
                        _priv.findCB.bind(this),
                        _priv.errorCB.bind(this),
                        null,
                        _priv.typeFilter,
                        null,
                        _priv.fetchCount,
                        _priv.fetchOffset);
                } else {
                    _priv.deferred.resolve();
                }
            }
        }; // _priv


        // Public stuff

        return {
            initialize: function() {
                if (_priv.initialized)
                    return;

                if (win.tizen === undefined) {
                    throw Error("You need the Tizen web API  to run Hoofbeats.");
                }

                _priv.audioTypeFilter = new tizen.AttributeFilter(
                    "type", "EXACTLY", "AUDIO");
                _priv.videoTypeFilter = new tizen.AttributeFilter(
                    "type", "EXACTLY", "VIDEO");
                _priv.typeFilter = new tizen.CompositeFilter(
                    "UNION", [_priv.audioTypeFilter, _priv.videoTypeFilter]);
            },

            scan: function(options) {
                var opts = options || {};
                if (opts.resolve !== undefined) {
                    _priv.resolve = opts.resolve;
                }

                _priv.deferred = new $.Deferred();
                this.initialize();

                _priv.mediaItems = [];
                _priv.fetchOffset = 0;

                if (opts.count !== undefined) {
                    _priv.fetchCount = opts.count;
                    _priv.oneTime = true;
                }

                tizen.content.find(
                    _priv.findCB.bind(this),
                    _priv.errorCB.bind(this),
                    null,
                    _priv.typeFilter,
                    null,
                    _priv.fetchCount,
                    _priv.fetchOffset);

                return _priv.deferred.promise();
            },

            item: function(id) {
                var ret;

                _priv.mediaItems.forEach(function(item, index, items) {
                    if (item.id == id)
                        ret = item;
                });

                return ret;
            },

            // Some simple getters
            getInitialized: function() { return _priv.initialized; },
            getItems: function() { return _priv.mediaItems; },
            getSize: function() { return _priv.mediaItems.length; },
            getResolve: function() {return _priv.resolve; }
        };
    };

    win.HoofbeatsLibrary = library;
}(window, jQuery));
