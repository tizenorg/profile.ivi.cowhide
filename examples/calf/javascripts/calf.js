$(function() {
    $.cowhide.initThemeEngine({
        path: '../..'
    });

    $('#night-mode-toggle').click(function() {
        $.cowhide.toggleNightMode();
    });

    $('#driving-mode-toggle').click(function() {
        $.cowhide.toggleDrivingMode();
    });

    $('form#controls button').click(function() {
        var $form = $(this).closest('form');
        var $input = $form.find('input');
        var val = $input.val();

        $('.btn').css('font-size', val + 'px');
    });

    $('form#controls select#theme-selector').change(function() {
        var value = $(this).find('option:selected').val();
        if (value !== '0')
            $.cowhide.setTheme(value);
    });
});
