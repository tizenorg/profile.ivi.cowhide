$(function() {
    $('#night-mode-toggle').click(function() {
        $.cowhide.toggleNightMode();
    });

    $('#driving-mode-toggle').click(function() {
        $.cowhide.toggleDrivingMode();
    });

    $('form#font-size-test button').click(function() {
        var $form = $(this).closest('form');
        var $input = $form.find('input');
        var val = $input.val();

        $('.btn').css('font-size', val + 'px');
    })
});
