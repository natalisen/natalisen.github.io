$(document).ready(function () {

	$(".owl-carousel").owlCarousel({
		margin: 10,
		loop: true,
		items: 2,
		stagePadding: 50
	});

	$('section').addClass('scroll-animations');
	$('.caption').find('h1').addClass('animated');
	$('.caption').find('h2').addClass('animated');
	$('.service_descr').find('li').addClass('animated');
	$('.instagram_feed').find('img').addClass('animated');



	// Check if element is scrolled into view
	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	// If element is scrolled into view, fade it in
	$(window).scroll(function () {
		$('.scroll-animations .animated').each(function () {
			if (isScrolledIntoView(this) === true) {
				if ($(this).is('.caption h2') || $(this).is('.filter_div li')) {
					$(this).addClass('fadeInUp');

				} else if ($(this).is('.caption h1')) {
					$(this).addClass('flipInX');

				} else if ($(this).is('.service_descr li')) {
					$(this).addClass('fadeInLeft');

				} else if ($(this).is('.instagram_feed img')) {
					$(this).addClass('fadeIn');
				} else if ($(this).is('.contact_descr')) {
					$(this).addClass('flipInY');
				}
			}
		});
	});

	if ($(".top_text").is(':visible')) {
		$('.top_text h3').addClass('fadeInDown');
		$('.top_text h1').addClass('fadeInUp');
	}

	function heightDetect() {
		$('.header_bg').css('height', $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	$('.toggle_mnu').click(function () {
		$('.sandwich').toggleClass('active');
	});

	$('.toggle_mnu').click(function () {
		if ($('.top_mnu').is(':visible')) {
			$('.top_mnu').fadeOut();
			$('.top_wrapper').css('opacity', '1');
			$('.top_mnu ul a').removeClass('fadeInUp animated');
		} else {
			$('.top_wrapper').css('opacity', '0.1');
			$('.top_mnu').fadeIn();
			$('.top_mnu ul a').addClass('fadeInUp animated');
		}
	});

	$('.top_mnu ul a').click(function () {
		$('.top_mnu').fadeOut(600);
		$('.top_wrapper').css('opacity', '1');
		$('.sandwich').toggleClass('active');
	}).append('<span>');


	$('#portfolio li').click(function () {
		$('#portfolio li').removeClass('active');
		$(this).addClass('active');
	});

	var containerEl = document.querySelector('#portfolio_grid');
	var mixer = mixitup(containerEl, {
		animation: {
			duration: 250,
			nudge: true,
			reverseOut: false,
			effects: 'fade translateZ(-100px)'
		}
	});

	$('.popup').magnificPopup({
		type: 'image'
	});
	$('.popup_content').magnificPopup({
		type: 'image',
		midClick: true
	});
});

$(window).on("load", function () {
	$("#loading").delay(2000).fadeOut(500);
})