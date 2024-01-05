/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($) {

    'use strict';
  
    var options = {
      valueNames: [ 'card__title', 'card__tags' ],
      listClass: 'cards'
    };
  
    var cardList = new List('cards-list', options);
  
    $('.news-tags').on('change', function() {
      var tag = $(this).val();
  
      cardList.filter(function (item) {
        if (tag == '') {
          cardList.filter();
        }
        else if (item.values().card__tags.indexOf(tag) !== -1) {
          return true;
        }
        else {
          return false;
        }
      });
  
      return false;
     });
  
  })(jQuery);