/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

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
