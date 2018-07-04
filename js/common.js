$(document).ready(function() {
	
	// Placeholder
	$('input.styler, textarea.styler').placeholder();
	
	// Checkbox, Radio, Select
	$('input.radio, input.checkbox, .selectbox').styler();
	
	// Fancybox
	$('.js_callwin, .js_orderform, .js_confwin').fancybox({
		margin: [44, 0],
		touch : false,
		closeBtn: false
	});
	$('.js_videoYoutube').fancybox({
		touch : false,
		type: "iframe",
		youtube: {
            autoplay: 1
        }
	});


	// showNav
	$('.showNav').click(function() {
		$('.navmenu').toggleClass('opened');
		$(this).toggleClass('opened');
		return false;
	});
	$(this).keydown(function(eventObject) {
		if (eventObject.which == 27) {
			$('.navmenu').removeClass('opened');
			$('.showNav').removeClass('opened');
		}
	});


	// Mask input
	$(".styler_phone").mask("+7 (999) 999-99-99");
	
	
	// OWL-carousel
	$('#revews_slider').owlCarousel({
		loop: false,
		margin: 0,
		nav: true,
		dots: false,
		mouseDrag: false,
		responsive: {
			0: { items: 1 },
			768: { items: 2 },
			1000: { items: 3 }
		}
	});
	$('#partners_slide').owlCarousel({
		loop: false,
		margin: 0,
		nav: true,
		dots: false,
		mouseDrag: false,
		responsive: {
			0: { items: 1, dots: true, nav: false },
			768: { items: 4 },
			1000: { items: 5 }
		}
	});
	// Slider
	$('#fs_slider').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		animateOut: 'fadeOut',
		nav: true,
		smartSpeed: 450,
		autoplay: true,
		autoplayTimeout: 5000,
		mouseDrag: false
	});
	$('#instslider').owlCarousel({
		items: 1,
		margin: 20,
		nav: false,
		center: true,
		loop: true,
		dots: true,
		smartSpeed: 450,
		autoplay: false,
		autoplayTimeout: 5000,
		mouseDrag: false,
		autoWidth: true,
	});

	// Instafeed
    var feed = new Instafeed({
        get: 'user',
		 userId: '3234940210',
		 accessToken: '3234940210.1677ed0.19e4070b527141cc855381d4396338d5'
    });
    feed.run();

	
	// Navigarion scroll
	$('.navmenu li a').click(function() {
		var target = $(this).attr("href");
		$('html, body').animate({scrollTop: $(target).offset().top-50}, 700);
		$('.navmenu li').addClass('active');
		$('.navmenu li').removeClass('active');
		$(this).parent().addClass('active');
		$('.navmenu').removeClass('opened');
		$('.showNav').removeClass('opened');
		return false;
	});

	// $('body').scrollspy({ target: '#navbar' });

	// scheme_more
	$('.scheme_more').click(function() {
		$(this).parent().parent().find('.scheme_txt').slideToggle(200);
		return false;
	});
	


});