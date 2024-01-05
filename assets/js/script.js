/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($) {

    'use strict';
  
    $('.cards--box-link').addClass('js-box-link').handle('click', function () {
      window.location=$(this).find('.card__link').attr('href');
    });
  
  })(u);