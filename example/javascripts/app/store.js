(function(app) {
    'use strict';

    var Store = function() {}

    Store.prototype = {
        data: [
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

        getArtist: function(artist) {
            return app.Artist.create({
                "id": artist.id,
                "firstName": artist.firstName,
                "lastName": artist.lastName,
                "bandName": artist.bandName
            });
        }
    };

    app.Store = new Store();
})(window.Calf);