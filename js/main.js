(function($) {

    'use strict';

    var phone_mask = function() {
        $("input[name='phone']").mask("+7 (999) 999-9999");
    };

    var menu_fixed = function() {
        $('#header').stickUp({
            scrollHide: true,
            scrollDistance: "1000px",
        });
    };

    var modal_form = function() {
        var link = $('.modal__link');

        link.on('click', function(e) {
            e.preventDefault();
            $(this).addClass('modal__link--show');
            $(this).next('.modal__show').slideDown();
        });
    };

    var video = function() {

        var vid = document.getElementById('bgvid');

        if (vid !== null) {

            // var vid = document.getElementById("bgvid");
            var pauseButton = document.querySelector("#video-stop");

            if (window.matchMedia('(prefers-reduced-motion)').matches) {
                vid.removeAttribute("autoplay");
                vid.pause();
                pauseButton.innerHTML = "Paused";
            }

            function vidFade() {
                vid.classList.add("stopfade");
            }

            vid.addEventListener('ended', function() {
                // only functional if "loop" is removed 
                vid.pause();
                // to capture IE10
                vidFade();
            });


            pauseButton.addEventListener("click", function() {
                vid.classList.toggle("stopfade");
                if (vid.paused) {
                    vid.play();
                    pauseButton.innerHTML = "Остановить видео";
                } else {
                    vid.pause();
                    pauseButton.innerHTML = "Смотреть видео";
                }
            })
        }
    };

    var logo_adaptive = function() {
        var logo = $('.logo__img'),
            logo_wrapper = $('.logo'),
            header = $('.page__header'),
            window_width = window.innerWidth,
            page_mission = 'page__header--mission',

            desktop = (window_width >= 769),
            mobile = (window_width <= 768);

        switch (true) {
            case desktop:
                logo.removeClass('logo__img--mobile');

                if (header.hasClass(page_mission) === true) {
                    logo.attr('src', logo.data("logo-dw-src"));
                    logo.attr('srcset', logo.data("logo-dw-srcset"));
                    logo_wrapper.addClass('logo--white');
                } else {
                    logo.attr('src', logo.data("logo-d-src"));
                    logo.attr('srcset', logo.data("logo-d-srcset"));
                }
                break;

            case mobile:
                logo.addClass('logo__img--mobile');

                logo.attr('src', logo.data("logo-m-src"));
                logo.attr('srcset', logo.data("logo-m-srcset"));
                
                break;
        }
    };

    var video_control = function() {

        if (window.innerWidth <= 768) {
            $('.video video').prop("controls", true);
        }else{
            $('.video video').removeProp("controls");
        }
    };

    var preloader = function() {
    $(window).load(function() {
        setTimeout(function() {
            $('#preloader').fadeOut('slow', function() {});}, 100);
        });
    };

    $(document).ready(function() {

        $(function() {
            preloader();
            logo_adaptive();
            video();
            //menu_fixed();
            modal_form();
            phone_mask();
            video_control();
            
        });

    });
    $(window).resize(function () {
        logo_adaptive();
    });
    var videoLoad = false;
    window.onload = function() {
        //if(videoLoad==false){
            //document.getElementById('bgvid').pause();
            //videoLoad = false;
        //}
    };
	
	
	$('body').on('click', '._js-reload-message', function (e) {
		e.preventDefault();
		var button = $(this);
		var buttonParent = button.closest('.is-active');
		buttonParent.removeClass('is-active');
		return false;
	});
	$('body').on('click', '._js-sendForm-image', function (e) {
		e.preventDefault();
		var img = $(this);
		var inputCode = img.closest('._js-sendForm-capcha').find('[name=form_code]');
		var inputHash = img.closest('._js-sendForm-capcha').find('[name=form_hash]');
		reloadCapcha(img, inputHash, inputHash);
		return false;
	});
	

})(jQuery);

function reloadCapcha(img, inputHash, inputCode){
    var form = inputHash.closest('form');

    $.ajax({
        type: "GET",
        url: form.attr('action'),
        data: {getCaptcha: "1"},
        success: function (response) {
            img.attr('src', response.img);
            inputCode.val('');
            inputHash.val(response.hash);
        }
    });
}