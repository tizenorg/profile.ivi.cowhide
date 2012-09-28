(function(app, Ember) {
    'use strict';

    var ApplicationView = Ember.View.extend({
        templateName: 'application'
    });

    app.ApplicationView = ApplicationView;
})(window.Calf, window.Ember);