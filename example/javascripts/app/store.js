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
                 "year": 2001
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
        }
    };

    app.Store = new Store();
})(window.Calf, window._);