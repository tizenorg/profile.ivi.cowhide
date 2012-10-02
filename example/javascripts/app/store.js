(function(app, _) {
    'use strict';

    var Store = function() {}

    Store.prototype = {
        data: [
            {"id": 0,
             "firstName": "Regina",
             "lastName": "Spektor",
             "albums": [
                {"id": 0,
                 "name": "11:11",
                 "year": 2001,
                 "songs": [
                    {"id": 0,
                     "title": "Love Affair",
                     "duration": "2:22"
                    },
                    {"id": 1,
                     "title": "Rejazz",
                     "duration": "3:37"
                    },
                    {"id": 2,
                     "title": "Back of a Truck",
                     "duration": "5:52"
                    }
                 ]
                },
                {"id": 1,
                 "name": "Songs",
                 "year": 2002
                },
                {"id": 2,
                 "name": "Soviet Kitsch",
                 "year": 2004
                },
                {"id": 3,
                 "name": "Begin to Hope",
                 "year": 2006
                },
                {"id": 4,
                 "name": "Far",
                 "year": 2009
                },
                {"id": 5,
                 "name": "What We Saw from the Cheap Seats",
                 "year": 2012
                }
             ]
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

        getArtist: function(artist_data) {
            return app.Artist.create(artist_data);
        },

        getAlbums: function(artist) {
            var albums = [];

            _.each(this.data, function(artist_data) {
                if (artist_data.albums &&
                    (artist === undefined || artist_data.id === artist.get('id'))) {
                    _.each(artist_data.albums, function(album_data) {
                        albums.push(app.Album.create(album_data));
                    });
                }
            });

            return albums;
        },

        getSongs: function(artist, album) {
            var songs = [];

            _.each(this.data, function(artist_data) {
                if (artist_data.albums &&
                    (artist === undefined || artist_data.id === artist.geT('id'))) {
                    _.each(artist_data.albums, function(album_data) {
                        if (album_data.songs &&
                            (album === undefined || album_data.id === album.get('id'))) {
                            _.each(album_data.songs, function(song_data) {
                                songs.push(app.Song.create(song_data));
                            });
                        }
                    });
                }
            });

            return songs;
        }
    };

    app.Store = new Store();
})(window.Calf, window._);