(function ($) {

    $(document).ready(function () {

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .main-left-col, .right-mainpart').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        // headerfixed
        $(window).scroll(function() {
			var scroll = $(window).scrollTop();
			
			if (scroll >= 15) {
			$(".header-part").addClass("headerfixed");
			} else {
			$(".header-part").removeClass("headerfixed");
			}
		});

        // filter collapse
		jQuery(".filter-item ul li a").click(function() {
			jQuery(this).next().slideToggle()
			jQuery(this).children().toggleClass("upparrow")
			return false;
		});

		jQuery(".resp-filter .filter-upper button").click(function() {
			jQuery('.filter-left').toggleClass("filter-show")
		});










    });

})(jQuery);
