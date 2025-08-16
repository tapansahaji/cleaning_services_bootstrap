(function ($) {
	"use strict";
	// /*========== Nice Select ==========*/
	$('select').niceSelect();
	// /*==========  wow  ==========*/
	new WOW().init();
	// /*========== Responsive Menu  ==========*/
	$('.header__area-menubar-main-menu').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="flaticon-close"></i>'
	});
	// /*========== Responsive Menu  ==========*/
	$('.header__area-two-menubar-main-menu').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="flaticon-close"></i>'
	});
	// /*==========  banner  ==========*/
	var swiper = new Swiper(".banner-slider", {
		slidesPerView: 1,
		effect: 'fade',
		pagination: {
			el: ".banner-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">0' + (index + 1) + "</span>";
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	/*==========  counterUp  ==========*/
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	/*==========  img-popup  ==========*/
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	/*==========  video-popup  ==========*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	/*==========  background  ==========*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})
	/*==========  theme loader  ==========*/
	$(window).on("load", function () {
		$(".theme-loader").fadeOut(500);
	});
	// /*==========  Blog Slider  ==========*/
	var swiper = new Swiper(".blog-details-slider", {
		slidesPerView: 2,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				spaceBetween: 20,
			},
			768: {
				spaceBetween: 30,
			},
		}
	});
	// /*==========  Services  ==========*/
	var swiper = new Swiper(".services-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		pagination: {
			el: ".services-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			},
		}
	});
	// /*==========  Blog Slider  ==========*/
	var swiper = new Swiper(".blog-slider", {
		slidesPerView: 2,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		pagination: {
			el: ".blog-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 2
			},
		}
	});
	// /*==========  Testimonial  ==========*/
	var swiper = new Swiper(".testimonial__area-slider", {
		slidesPerView: 2,
		loop: true,
		speed: 1500,
		spaceBetween: 40,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 1
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 2
			},
		}
	});
	/*==========  Progress Bar  ==========*/
	if ($('.team__details-right-item-skill-bar').length) {
		$('.team__details-right-item-skill-bar').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*========== Active Hover  ==========*/
	$(".portfolio__area-item").hover(function () {
		$(".portfolio__area-item").removeClass("portfolio__area-item-hover");
		$(this).addClass("portfolio__area-item-hover");
	});
	// /*========== Active Hover  ==========*/
	// $(".portfolio__area-item").hover(	
	// 	function() {$(this).addClass("portfolio__area-item-hover")},
	// 	function() {$(".portfolio__area-item").removeClass("portfolio__area-item-hover")}
	// );
	/*========== FAQ  ==========*/
	$(".faq__area-collapse-item-card-header").click(function () {
		if ($(this).next(".faq__area-collapse-item-card-header-content").hasClass("active")) {
			$(this).next(".faq__area-collapse-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("fas fa-minus").addClass("fas fa-plus")
		} else {
			$(".faq__area-collapse-item-card .faq__area-collapse-item-card-header-content").removeClass("active").slideUp()
			$(".faq__area-collapse-item-card .faq__area-collapse-item-card-header i").removeClass("fas fa-minus").addClass("fas fa-plus");
			$(this).next(".faq__area-collapse-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("fas fa-plus").addClass("fas fa-minus")
		}
	});
	/*========== scroll to top  ==========*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-top').fadeIn(200);
		} else {
			$('.scroll-top').fadeOut(200);
		}
	});
	$('.scroll-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
})(jQuery);