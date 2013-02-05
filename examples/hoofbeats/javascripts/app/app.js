/* vi: set et sw=4 ts=4 si: */
(function(win) {
    win.Hoofbeats = win.Ember.Application.create({
        VERSION: '0.1',
        rootElement: '#application',
        initialized: false,
        init: function() {
            var self = this;

            if (self.initialized) {
                return;
            }

            if (win.HoofbeatsLibrary) {
                self.library = new win.HoofbeatsLibrary();
                self.initialized = true;
            } else {
                setTimeout(function() {
                    self.init();
                }, 100);
            }
        }
    });
}(window));
