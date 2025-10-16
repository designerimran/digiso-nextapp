"use client";
import jQuery from 'jquery'; 
import "./jquery.appear.js";
import "./jquery.odometer.min.js";
import "./vendor/jquery-3.6.0.min.js";
import "./bootstrap.bundle.min.js";
import "./jquery.magnific-popup.min.js";

(function ($) {
	"use strict";

	// loader js
	$(window).on("load", function () {
		$(".fullpage_loader").fadeOut("slow", function () {
			$(this).remove();
		});
	});

	// fixed menu js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$("#header-fixed-height").addClass("active-height");
		}
	});

	
})(jQuery);
