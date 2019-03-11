$(document).ready(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 1) {
            $("header").addClass("sticky-menu");
            $("header").removeClass("animation2");
            $("header").removeClass("animation");
		} else {
            $("header").removeClass("sticky-menu");
            $("header").addClass("animation2");
            $("header").addClass("animation");
		}
	});
});
