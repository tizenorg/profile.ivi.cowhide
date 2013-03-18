/* vi: set et sw=4 ts=4 si: */
(function(win, $) {
    var musicbrainz = function() {
        var _priv = {
            _baseUrl: 'http://musicbrainz.org/ws/2/',
            _fmtArg: 'fmt=json',
            _interval: undefined,
            _queue: [],
            _url_cache: {},


            /* Internal methods to perform XHR requests. */

            _get: function(request) {
                if (request.url in _priv._url_cache) {
                    request.deferred.resolve(_priv._url_cache[request.url]);
                } else {
                    $.getJSON(request.url)
                    .done(function(data, statusText, xhr) {
                        _priv._url_cache[request.url] = data;
                        request.deferred.resolve(data);
                    })
                    .error(function(xhr) {
                        if (xhr.status === 503) {
                            _priv._enqueue(request); // put it back in the queue
                        }
                    });
                }

                return request.deferred.promise();
            },


            /* Internal methods for the handling of the request queue */

            _startQueue: function() {
                if (_priv._interval === undefined) {
                    _priv._interval = setInterval(function() {
                        _priv._dequeue();
                    }, 2000);
                }
            },

            _stopQueue: function() {
                clearInterval(_priv._interval);
                _priv._interval = undefined;
            },

            _enqueue: function(request) {
                if ($.inArray(request.url, _priv._queue) < 0) {
                    _priv._queue.push(request);
                }
            },

            _dequeue: function() {
                var request = _priv._queue.shift();
                if (request !== undefined) {
                    _priv._get(request);
                }
            }
        }; // _priv


        /* Public methods */
        return {
            getArtist: function(q) {
                var lookup_url = _priv._baseUrl + 'artist/?query="' + q +
                                 '"&' + _priv._fmtArg,
                    lookup_deferred = new $.Deferred(),
                    returned_deferred = new $.Deferred();

                if (q !== undefined) {
                    if (_priv._interval === undefined) {
                        _priv._startQueue();
                    }

                    _priv._enqueue({url: lookup_url, deferred: lookup_deferred});
                    lookup_deferred.done(function(data) {
                        if (data.count > 0) {
                            var artist_url = _priv._baseUrl + 'artist/' +
                                             data.artist[0].id + '?' + _priv._fmtArg,
                                artist_deferred = new $.Deferred();

                            _priv._get({url: artist_url, deferred: artist_deferred});
                            artist_deferred.done(function(data) {
                                returned_deferred.resolve(data);
                            });
                        } else {
                            returned_deferred.reject();
                        }
                    });
                } else {
                    returned_deferred.reject();
                }

                return returned_deferred.promise();
            }
        };
    };

    win.MusicBrainz = new musicbrainz();
}(window, jQuery));
