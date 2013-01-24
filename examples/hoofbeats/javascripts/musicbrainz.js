/* vi: set et sw=4 ts=4 si: */
$(function() {
    var musicbrainz = function() {
        this.baseUrl = 'http://musicbrainz.org/ws/2/';
        this.fmtArg = 'fmt=json';

        this.getArtist = function(q) {
            var self = this,
                lookup_url = self.baseUrl + 'artist/?query=' + q + '&' + self.fmtArg;
                deferred = new $.Deferred();

            $.getJSON(lookup_url).done(function(data) {
                artist_url = self.baseUrl + 'artist/' + data.artist[0].id + '?' + self.fmtArg;
                $.getJSON(artist_url).done(function(data) {
                    deferred.resolve(data);
                });
            });
            return deferred.promise();
        };
    }

    window.MusicBrainz = new musicbrainz();
});
