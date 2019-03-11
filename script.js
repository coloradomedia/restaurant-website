$(document).ready(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 1) {
            $("header").addClass("sticky-menu");
            $(".main-section").addClass("padding");
		} else {
			$("header").removeClass("sticky-menu");
			$(".main-section").removeClass("padding");
		}
	});
});
