(function(win) {
    'use strict';

    win.Calf = window.Ember.Application.create({
        VERSION: '0.1',
        rootElement: '#application',
        ready: function() {
            this.initialize();
        }
    })
})(window);