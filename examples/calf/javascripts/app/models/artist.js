/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

(function(app, Ember) {
    'use strict';

    var Artist = Ember.Object.extend({
        id: null,
        firstName: null,
        lastName: null,
        bandName: null,

        name: function() {
            var ret = "";
            if (this.get('firstName') && this.get('lastName')) {
                ret = "%@, %@".fmt(this.get('lastName', this.get('firstName')));
                if(this.get('bandName')) {
                    ret += " (%@)".fmt(this.get('bandName'));
                }
            } else {
                ret = this.get('bandName');
            }

            return ret;
        }.property('firstName', 'lastName', 'bandName'),

        isBandOnly: function() {
            if (this.get('firstName') === null &&
                this.get('lastName') === null &&
                this.get('bandName') !== null) {
                return true;
            }
            return false;
        }.property('firstName', 'lastName', 'bandName')
    });


    Artist.reopenClass({
        find: function() {
            return app.Store.getArtists();
        }
    });

    app.Artist = Artist;
})(window.Calf, window.Ember);
