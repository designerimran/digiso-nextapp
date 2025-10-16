"use client";
import jQuery from 'jquery';
(function($) {
  "use strict";

  // Sticky Header - Start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.site_header').addClass("sticky")
    } else {
      $('.site_header').removeClass("sticky")
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

})(jQuery);