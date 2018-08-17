jQuery(document).ready(function(){
	$('.request_call ').click(function(){
		var h_e = $(window).scrollTop();
		$('.body_mask').fadeIn(300);
		$('.form_popap').css('top', (h_e+50) + 'px').slideDown(300);
	});
		$('.btn_write').click(function(event){
		event.preventDefault()
		var h_e = $(window).scrollTop();
		$('.body_mask').fadeIn(300);
		$('.write_popap').css('top', (h_e+50) + 'px').slideDown(300);
	});
		$('.btn_application').click(function(event){
		event.preventDefault()
		var h_e = $(window).scrollTop();
		$('.body_mask').fadeIn(300);
		$('.application_popap').css('top', (h_e+50) + 'px').slideDown(300);
	});
		$('.btn_aquarium').click(function(event){
		event.preventDefault()
		var h_e = $(window).scrollTop();
		$('.body_mask').fadeIn(300);
		$('.aquarium_popap').css('top', (h_e+50) + 'px').slideDown(300);
	});
		$('.btn_products').click(function(event){
		event.preventDefault()
		var h_e = $(window).scrollTop();
		$('.body_mask').fadeIn(300);
		$('.products_popap').css('top', (h_e+50) + 'px').slideDown(300);
	});
});
	
	$('.body_mask, .close').click(function(){
		$('.body_mask').fadeOut(300);
		$('.form_popap, .ok_popap, .write_popap, .application_popap, .aquarium_popap, .products_popap').slideUp(300);
	});
	$('.faq_question').click(function(){
		$(this).closest('.fag_item').toggleClass('active');
	});
	var limit     = $(window).height()/2,
	$backToTop = $('.top');
		$(window).scroll(function () {
	if ( $(this).scrollTop() > limit ) {
		$backToTop.fadeIn();
	} else {
		$backToTop.fadeOut();
	}
	});
	$backToTop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$('.lang_top > div').click(function(){
		$('.div_lang ul').slideDown(300);
	});
	$('.div_lang ul li').click(function(){
		var div_lang = $(this).html();
		$('.lang_top > div').html(div_lang);
		$('.div_lang ul').slideUp(300);
	});
	$('.nav_mobil span').click(function(){
	  if($(this).hasClass('active')){
		  $(this).removeClass('active');
		  $('.ul_nav').slideUp(300);
	  } else{
		    $(this).addClass('active');
		  $('.ul_nav').slideDown(300);
	  }
	});

	function interviewItems(){
		var name_radio_1 = $('input:radio[name=radio_1]');
		var name_radio_2 = $('input:radio[name=radio_2]');
		var name_radio_3 = $('input:radio[name=radio_3]');
		var div_svg_one = $('.div_svg_one');
		var div_submit = $('.div_submit');
		var interview_right_span = $('.interview_right h3 span');
		var ul_sale = $('.ul_sale li');
		var interview_container = $('.interview_container');
		var interview_hidden = $('.interview_hidden');

		name_radio_1.on('change', function () {
			var text_select = $(this).next('label').text();
			interview_right_span.text('9%');
			ul_sale.eq(0).removeClass('active').addClass('active_white').children('span').text(text_select);
			ul_sale.eq(1).addClass('active');
			interview_container.animate({left:'-100%'}, 300);
			$('.interview_head h6 span').text('2');
			$('.span_indicator span').css('width','50%');
		});
		name_radio_2.on('change', function () {
			var text_select = $(this).next('label').text();
			interview_right_span.text('11%');
			ul_sale.eq(1).removeClass('active').addClass('active_white').children('span').text(text_select);
			ul_sale.eq(2).addClass('active');
			interview_container.animate({left:'-200%'}, 300);
			$('.interview_head h6 span').text('3');
			$('.span_indicator span').css('width','75%');
		});
		name_radio_3.on('change', function () {
			var text_select = $(this).next('label').text();
			interview_right_span.text('13%');
			ul_sale.eq(2).removeClass('active').addClass('active_white').children('span').text(text_select);
			ul_sale.eq(3).addClass('active');
			interview_container.animate({left:'-300%'}, 300);
			$('.interview_head h6 span').text('4');
			$('.span_indicator span').css('width','100%');
		});
		div_svg_one.on('click', function () {
			var text_select = $(this).children('label').text();
			interview_hidden.html('');
			ul_sale.eq(3).removeClass('active').addClass('active_white').children('span').text(text_select);
			interview_container.animate({left:'-400%'}, 300);
			$('.interview_head').html('<h6>Персональная скидка</h6>');
		});
		div_submit.on('click', function () {
			$('.interview_right').css('display','none');
			interview_container.animate({left:'-500%'}, 300);
		});
	}
	interviewItems();

	function menuOpen(){
		var button_mobil = $('.button_mobil');
		var header = $('.header');

		button_mobil.click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				header.animate({left:'-273px'},300);
			} else{
				$(this).addClass('active');
				header.animate({left:'0px'},300);
			}
		});
	}
	menuOpen();
	
		/*--------------------------количество товара в инпуте-------------------*/
	var input; 
	var a;
	$('.span_plu').click(function(){ 
	    input = $(this).parent().children('input');
		a = input.val(); 
		a++; 
		input.val(a);
	});
	$('.span_min').click(function(){ 
	    input = $(this).parent().children('input');
		a = input.val(); 
		a = (a<2)?2:a;
		a--; 
		input.val(a); 
	});
	
		$('.div_curbstone').click(function(){
		$('.div_curbstone').removeClass('active');
		$(this).addClass('active');
	});
		$('.select_open').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('.select_body').slideUp(300);
			} else{
				$(this).addClass('active');
				$('.select_body').slideDown(300);
			}
				});
			$('.select_body li').click(function(){
				var  select_body = $(this).html();	
				$('.select_open > div').html(select_body);
				$('.select_body').slideUp(300);
			});

	$('.card_tabs_head li').click(function(){
	  var card_tabs_head = $(this).index();
	  $('.card_tabs_head li').removeClass('active');
	  $(this).addClass('active');
	  $('.card_tabs_body div').removeClass('active');
	  $('.card_tabs_body div').eq(card_tabs_head).addClass('active');
	});

	$('.btn_bottom').click(function(){
		var p = jQuery( ".div_interview" );
		var offset = p.offset();
		jQuery("html,body").animate({"scrollTop":offset.top+100}, 500 );
	  });
	$('.slider_shape_open').click(function(){
		$('.shape_open').slideDown(300);
	});
	$('.shape_close').click(function(){
		$('.shape_open').slideUp(300);
	});
	$('.span_open').click(function(){
		if($(this).closest('li').hasClass('open')){
			$(this).closest('li').removeClass('open');
			$(this).next('ul').slideUp(300);
		} else{
			$(this).closest('li').addClass('open');
			$(this).next('ul').slideDown(300);
		}
	});

