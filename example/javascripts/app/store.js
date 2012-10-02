(function(app, _) {
    'use strict';

    var Store = function() {}

    Store.prototype = {
        artists: [
            {"id": 0,
             "firstName": "Regina",
             "lastName": "Spektor"
            },
            {"id": 1,
             "firstName": "Ani",
             "lastName": "diFranco"
            },
            {"id": 2,
             "firstName": "Emily",
             "lastName": "Haynes",
             "bandName": "Metric"
            },
            {"id": 3,
             "firstName": "Casey",
             "lastName": "Dienel"
            }
        ],

        albums: [
            {"id": 0,
             "artist_id": 0,
             "name": "11:11",
             "year": 2001
            },
            {"id": 1,
             "artist_id": 0,
             "name": "Songs",
             "year": 2002
            },
            {"id": 2,
             "artist_id": 0,
             "name": "Soviet Kitsch",
             "year": 2004
            },
            {"id": 3,
             "artist_id": 0,
             "name": "Begin to Hope",
             "year": 2006
            },
            {"id": 4,
             "artist_id": 0,
             "name": "Far",
             "year": 2009
            },
            {"id": 5,
             "artist_id": 0,
             "name": "What We Saw from the Cheap Seats",
             "year": 2012
            }
        ],

        songs: [
            {"id": 0,
             "album_id": 0,
             "title": "Love Affair",
             "duration": "2:22"
            },
            {"id": 1,
             "album_id": 0,
             "title": "Rejazz",
             "duration": "3:37"
            },
            {"id": 2,
             "album_id": 0,
             "title": "Back of a Truck",
             "duration": "5:52"
            }
        ],

        getArtist: function(id) {
            var artist = app.Artist.create(
                _.find(this.artists, function(artist_data) {
                    return artist_data.id === id;
                })
            );

            return artist;
        },
        getArtists: function() {
            var artists = [];

            _.each(this.artists, function(artist_data) {
                artists.push(app.Artist.create(artist_data));
            });

            return artists;
        },

        getAlbum: function(id) {
            var album_data = _.find(this.albums, function(album_data) {
                return album_data.id === id;
            });

            var album = app.Album.create(album_data);
            var artist = this.getArtist(album_data.artist_id);

            album.set('artist', artist);

            return album;
        },
        getAlbums: function(artist) {
            var albums = [];

            _.each(this.albums, function(album_data) {
                var album = app.Album.create(album_data);
                var album_artist = this.getArtist(album_data.artist_id);

                if (artist === undefined || artist === album_artist) {
                    album.set('artist', album_artist);
                    albums.push(album);
                }
            });

            return albums;
        },

        getSongs: function(album) {
            var songs = [];

            _.each(this.songs, function(song_data) {
                var song = app.Album.create(song_data);
                var song_album = this.getAlbum(song_data.album_id);

                if (album === undefined || album === song_album) {
                    song.set('album', song_album);
                    songs.push(song);
                }
            });

            return songs;
        }
    };

    app.Store = new Store();
})(window.Calf, window._);