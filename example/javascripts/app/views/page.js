(function(app, Ember) {
    'use strict';

    var Page = Ember.View.extend({
        didInsertElement: function() {
            this.$()
                .css({opacity: 0})
                .animate({opacity: 1}, 250);
        }
    });

    app.Page = Page;
})(window.Calf, window.Ember);