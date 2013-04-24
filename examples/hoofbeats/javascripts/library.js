/* vi: set et sw=4 ts=4 si: */
/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function(win, $) {
    var library = function() {
        // Private stuff

        var _priv = {
            initialized: false,
            deferred: undefined,
            fetchCount: 100,
            fetchOffset: 0,
            oneTime: false,
            mediaItems: [],
            resolveBackend: MusicBrainz,

            errorCB: function(error) {
                console.log("HoofbeatsLibrary.errorCB: " + error.name);
                this.deferred.reject();
                throw new Error(error.name);
            },

            findCB: function(items) {
                items.forEach(function(item, index, items) {
                    _priv.mediaItems.push(item);
                    if (_priv.resolveBackend !== undefined) {
                        _priv.resolveBackend.getArtist(item.artists[0]).done(
                            function(data) {
                                console.log(
                                    "HoofbeatsLibrary.findCB: " +
                                    "item resolved on " + _priv.resolveBackend.name() +
                                    ": " + data.name);
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
                if (opts.resolveBackend !== MusicBrainz) {
                    _priv.resolveBackend = opts.resolveBackend;
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
            getResolve: function() {return _priv.resolveBackend !== undefined; }
        };
    };

    win.HoofbeatsLibrary = library;
}(window, jQuery));
