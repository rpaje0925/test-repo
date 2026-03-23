(function ($) {
	"use strict";

	// menu
	$(".siteBar-btn").click(function (event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$(".mobile-menu").toggleClass("siteBar");
		$("body").toggleClass("overflow-hidden");
	});

	// owlCarousel
	$(".Journey__slider").owlCarousel({
		loop: true,
		margin: 40,
		navText: ['<i ><img src="assets/img/icon/owl-left.svg" alt=""></i>', '<i ><img src="assets/img/icon/owl-right.svg" alt=""></i>'],
		nav: true,
		dots: false,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 2,
				stagePadding: 50,
			},
			992: {
				items: 3,
				stagePadding: 50,
			},
			1300: {
				items: 4,
				stagePadding: 150,
			},
			1600: {
				items: 4,
				stagePadding: 200,
			},
		},
	});

	// owlCarousel
	$(".Blog__slider").owlCarousel({
		loop: true,
		items: 1,
		margin: 20,
		navText: ['<i ><img src="assets/img/icon/owl-left.svg" alt=""></i>', '<i ><img src="assets/img/icon/owl-right.svg" alt=""></i>'],
		nav: true,
		dots: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
				stagePadding: 30,
			},
			500: {
				stagePadding: 100,
			},
			600: {
				stagePadding: 150,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 3,
			},
		},
	});

	// owlCarousel
	$(".brand-active").owlCarousel({
		loop: true,
		margin: 30,
		items: 6,
		navText: ['<i ><img src="assets/img/icon/owl-left.svg" alt=""></i>', '<i ><img src="assets/img/icon/owl-right.svg" alt=""></i>'],
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 2,
			},
			767: {
				items: 3,
			},
			992: {
				items: 6,
			},
		},
	});

	// owlCarousel
	$(".feedback__slider").owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		items: 1,
		margin: 24,
		navText: ['<i ><img src="assets/img/icon/owl-left.svg" alt=""></i>', '<i ><img src="assets/img/icon/owl-right.svg" alt=""></i>'],
		nav: false,
		dots: false,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},

			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 3,
			},
		},
	});

	// page Animation
	// AOS.init({
	//   mirror: true,
	//   duration: 1500,
	//   initClassName: 'aos-init',
	//   once: true,
	// });

	// data-aos="fade-up"
	// data-aos-delay="300"
})(jQuery);
