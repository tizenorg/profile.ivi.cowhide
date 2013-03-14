/* vi: set et sw=4 ts=4 si: */
(function(win, $) {
    var musicbrainz = function() {
        this._baseUrl = 'http://musicbrainz.org/ws/2/';
        this._fmtArg = 'fmt=json';
        this._interval = undefined;
        this._queue = [];
        this._url_cache = {};


        /* Internal methods to perform XHR requests. */

        this._get = function(request) {
            var self = this;

            if (request.url in self._url_cache) {
                request.deferred.resolve(self._url_cache[request.url]);
            } else {
                $.getJSON(request.url)
                .done(function(data, statusText, xhr) {
                    self._url_cache[request.url] = data;
                    request.deferred.resolve(data);
                })
                .error(function(xhr) {
                    if (xhr.status === 503) {
                        self._enqueue(request); // put it back in the queue
                    }
                });
            }

            return request.deferred.promise();
        };


        /* Internal methods for the handling of the request queue */

        this._startQueue = function() {
            var self = this;

            if (self._interval === undefined) {
                self._interval = setInterval(function() {
                    self._dequeue();
                }, 2000);
            }
        };

        this._stopQueue = function() {
            clearInterval(this._interval);
            this._interval = undefined;
        };

        this._enqueue = function(request) {
            if ($.inArray(request.url, this._queue) < 0) {
                this._queue.push(request);
            }
        };

        this._dequeue = function() {
            var request = this._queue.shift();
            if (request !== undefined) {
                this._get(request);
            }
        };


        /* Public methods */

        this.getArtist = function(q) {
            var self = this,
                lookup_url = self._baseUrl + 'artist/?query="' + q +
                             '"&' + self._fmtArg,
                lookup_deferred = new $.Deferred(),
                returned_deferred = new $.Deferred();

            if (q !== undefined) {
                if (self._interval === undefined) {
                    self._startQueue();
                }

                self._enqueue({url: lookup_url, deferred: lookup_deferred});
                lookup_deferred.done(function(data) {
                    if (data.count > 0) {
                        var artist_url = self._baseUrl + 'artist/' +
                                         data.artist[0].id + '?' + self._fmtArg,
                            artist_deferred = new $.Deferred();

                        self._get({url: artist_url, deferred: artist_deferred});
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
        };
    }

    win.MusicBrainz = new musicbrainz();
}(window, jQuery));
