$(function() {
    // TODO: the framework will do this, later.
    $('#night-mode-toggle').click(function() {
      if ($(this).hasClass('active')) {
        $('#cowhide-theme').attr('href', '../../dist/cowhide-default.css');
        } else {
            $('#cowhide-theme').attr('href', '../../dist/cowhide-cyborg.css');
        }
    });
});
