(function ($) {
    "use strict";

    //sticky menu
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 200) {
            $('.header').addClass('menu_fixed animated fadeInDown');
        } else {
            $('.header').removeClass('menu_fixed animated fadeInDown');
        }
    });

    //video popup
    var video_popup = $('.video_popup, .popup_youtube');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    //counter js
    var time = $('.counter')
    if (time.length > 0) {
        time.counterUp();
    }


    //niceselect select jquery
    var niceSelect = $('.niceSelect');
    if (niceSelect.length > 0) {
        niceSelect.niceSelect();
    }

    //banner slider js
    var bannerSlider = $(".bannerslider");
    if (bannerSlider.length) {
        bannerSlider.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 900,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: true
                }
            },
        });
    }

    //popular courses js
    var popular_courses = $(".gallery_slider");
    if (popular_courses.length) {
        popular_courses.owlCarousel({
            items: 4,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            margin: 15,
            smartSpeed: 300,
            dotsSpeed: 300,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    //popular courses js
    var testimonial = $(".testimonial_slider");
    if (testimonial.length) {
        testimonial.owlCarousel({
            items: 2,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                }
            }
        });
    }

    //time countdow
    $(document).ready(function () {
        function coursesTimer() {
            var endTime = new Date("23 May 2020 9:56:00 GMT+01:00");
            endTime = (Date.parse(endTime) / 1000);
            var now = new Date();
            now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function () {
            coursesTimer();
        }, 1000);
    });

    // Preloader js
    $(window).on('load', function () {
        $(".preloder").fadeOut();
        $(".loader").delay(3000).fadeOut("slow");
    });

    // map js
    if ($('#contactMap').length) {
        var $lat = $('#contactMap').data('lat');
        var $lon = $('#contactMap').data('lon');
        var $zoom = $('#contactMap').data('zoom');
        var $marker = $('#contactMap').data('marker');
        var $info = $('#contactMap').data('info');
        var $markerLat = $('#contactMap').data('mlat');
        var $markerLon = $('#contactMap').data('mlon');
        var map = new GMaps({
            el: '#contactMap',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info
            }
        })
    }
    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();


    //audio player
    var audio = $('audio');
    if (audio.length) {
        $('audio').audioPlayer({
            classPrefix: 'audioplayer',
            strPlay: '',
            strPause: '',
            strVolume: ''
        });
    }


    //isotop js
    $(document).ready(function () {
        var gallery = $('.gallery_iner');
        if (gallery.length) {
            gallery.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
        }
    });

    var program = document.getElementById("program_list");

    if (program) {
        $(document).ready(function () {
            var $grid = $('.program_list_filter').isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
            });
            var $buttonGroup = $('.filters');
            $buttonGroup.on('click', 'li', function (event) {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                var $button = $(event.currentTarget);
                $button.addClass('is-checked');
                var filterValue = $button.attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
        });
    }


// Counter Start

//'use strict';
$(function () {
	let mainClass = '.dl_countdown_content';
	let OffsetLocation = -4;
	let runningClass = '.dl_countdown_running'; //optinonal
	let endedClass = ".ended"; //optional
	//init
	let date, fixTime, index = 0,
		extraClass, initText, zeroPad;
	$(mainClass).each(function () { //for each countdown instance
		index++;
		date = $(this).attr('data-Date');
		fixTime = $(this).attr('data-fixTime');
		zeroPad = $(this).attr('data-zeroPad');
		extraClass = 'd_' + index;
		$(this).addClass(extraClass); //add a class to recognize each counter
		$(this).css('display', 'block'); //allow to start hidding the class to avoid a bad effect until js is loading
		if (fixTime != undefined) date = getFixDate(fixTime);
		//get init text with or whitout an extra Class
		if ($('.' + extraClass + ' ' + runningClass + ' timer').length) {
			initText = $('.' + extraClass + ' ' + runningClass + ' timer').text();
		} else {
			initText = $(this).text();
		}
		//show and hide classes
		$('.' + extraClass + ' ' + runningClass).css('display', 'block');
		$('.' + extraClass + ' ' + endedClass).css('display', 'none');
		//call main function
		dateReplace(extraClass, date, fixTime, initText, zeroPad); //prevent delay for the first time
		setInterval(dateReplace, 1000, extraClass, date, fixTime, initText, zeroPad);
	});

	function dateReplace(extraClass, date, fixTime, initText, zeroPad) {
		let dif = timeDistance(date, fixTime);
		let text = initText;
		let zeroPadArr = [];
		if (dif[0] < 0 || dif[1] < 0 || dif[2] < 0 || dif[3] < 0) {
			//countdown ended
			let endText = $('.' + extraClass).attr('data-endText');
			if (endText != undefined) { //case data-endText attr
				$('.' + extraClass).text(endText);
			} else { //case with two blocks
				$('.' + extraClass + ' ' + runningClass).css('display', 'none');
				$('.' + extraClass + ' ' + endedClass).css('display', 'block');
			}

		} else {
			//Zero-pad
			if (zeroPad != undefined) zeroPadArr = JSON.parse(zeroPad);
			if (zeroPadArr['Days'] != "false") dif[0] = String(dif[0]).padStart(2, '0');
			if (zeroPadArr['Hours'] != "false") dif[1] = String(dif[1]).padStart(2, '0');
			if (zeroPadArr['Minutes'] != "false") dif[2] = String(dif[2]).padStart(2, '0');
			if (zeroPadArr['Seconds'] != "false") dif[3] = String(dif[3]).padStart(2, '0');
			//replace text with or without extra class
			//whith extras Class
			if ($('.' + extraClass + ' ' + runningClass + '.dl_countdown_running').length) {
				$('.' + extraClass + ' ' + runningClass + '.dl_countdown_running .dl_days').text(dif[0]);
				$('.' + extraClass + ' ' + runningClass + '.dl_countdown_running .dl_hours').text(dif[1]);
				$('.' + extraClass + ' ' + runningClass + '.dl_countdown_running .dl_minutes').text(dif[2]);
				$('.' + extraClass + ' ' + runningClass + '.dl_countdown_running .dl_seconds').text(dif[3]);

			} else {
				//replace parts without extra Class
				text = text.replace('(days)', dif[0]);
				text = text.replace('(hours)', dif[1]);
				text = text.replace('(minutes)', dif[2]);
				text = text.replace('(seconds)', dif[3]);
				$('.' + extraClass).text(text);
			}
			pluralization(extraClass, dif);
		}
	}

	function timeDistance(date, fixTime) {
		var date1 = new Date(date);
		let date2, d, utc;
		d = new Date();
		utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		if (fixTime != undefined) date2 = new Date;
		else date2 = new Date(utc + (3600000 * OffsetLocation));
		var diff = date1.getTime() - date2;
		var msec = diff;
		var hh = Math.floor(msec / 1000 / 60 / 60);
		msec -= hh * 1000 * 60 * 60;
		var mm = Math.floor(msec / 1000 / 60);
		msec -= mm * 1000 * 60;
		var ss = Math.floor(msec / 1000);
		msec -= ss * 1000;
		var dd = Math.floor(hh / 24);
		if (dd > 0) {
			hh = hh - (dd * 24);
		}
		return [dd, hh, mm, ss];
	}

	function getFixDate(fixTime) {
		let getFixTimeDate = 0;
		var fixTimeDate = JSON.parse($('.' + extraClass).attr('data-fixTime'));
		if (fixTimeDate['Days'] != undefined) {
			getFixTimeDate += +fixTimeDate['Days'] * 60 * 24;
		}
		if (fixTimeDate['Hours'] != undefined) {
			getFixTimeDate += +fixTimeDate['Hours'] * 60;
		}
		if (fixTimeDate['Minutes'] != undefined) getFixTimeDate += +fixTimeDate['Minutes'];
		var now = new Date();
		now.setMinutes(now.getMinutes() + getFixTimeDate); // timestamp
		date = new Date(now); // Date object
		return date;
	}
	// Note this *is* JQuery, see below for JS solution instead
	function replaceText(selector, text, newText, flags) {
		var matcher = new RegExp(text, flags);
		$(selector).each(function () {
			var $this = $(this);
			if (!$this.children().length)
				$this.text($this.text().replace(matcher, newText));
		});
	}

	function pluralization(extraClass, dif) {
		//pluralization
		if (dif[0] == 1) replaceText('.' + extraClass, 'p_days', 'Day', 'g');
		else replaceText('.' + extraClass, 'p_days', 'Days', 'g');

		if (dif[1] == 1) replaceText('.' + extraClass, 'p_hours', 'Hour', 'g');
		else replaceText('.' + extraClass, 'p_hours', 'Hours', 'g');

		if (dif[2] == 1) replaceText('.' + extraClass, 'p_minutes', 'Minute', 'g');
		else replaceText('.' + extraClass, 'p_minutes', 'Minutes', 'g');

		if (dif[3] == 1) replaceText('.' + extraClass, 'p_seconds', 'Second', 'g');
		else replaceText('.' + extraClass, 'p_seconds', 'Seconds', 'g');
	}
})



//cercel progressbar js
const launchDate = new Date("May 12, 2022 13:00:00").getTime();
const c = {
	context: {},
	values: {},
	times: {}
};
// Convert radians to degrees
function deg(d) {
	return (Math.PI / 180) * d - (Math.PI / 180) * 90;
}
function render() {
	c.context.seconds.clearRect(0, 0, 200, 200);
	c.context.seconds.beginPath();
	c.context.seconds.strokeStyle = "#273B4C";
	c.context.seconds.arc(100, 100, 90, deg(0), deg(6 * (60 - c.times.seconds)));
	c.context.seconds.lineWidth = 4;
	c.context.seconds.stroke();

	c.context.minutes.clearRect(0, 0, 200, 200);
	c.context.minutes.beginPath();
	c.context.minutes.strokeStyle = "#273B4C";
	c.context.minutes.arc(100, 100, 90, deg(0), deg(6 * (60 - c.times.minutes)));
	c.context.minutes.lineWidth = 4;
	c.context.minutes.stroke();

	c.context.hours.clearRect(0, 0, 200, 200);
	c.context.hours.beginPath();
	c.context.hours.strokeStyle = "#273B4C";
	c.context.hours.arc(100, 100, 90, deg(0), deg(15 * (24 - c.times.hours)));
	c.context.hours.lineWidth = 4;
	c.context.hours.stroke();

	c.context.days.clearRect(0, 0, 200, 200);
	c.context.days.beginPath();
	c.context.days.strokeStyle = "#273B4C";
	c.context.days.arc(100, 100, 90, deg(0), deg(365 - c.times.days));
	c.context.days.lineWidth = 4;
	c.context.days.stroke();
}

// counter End

$('.gallery_popup_img').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true,
    }
});




function kidjo_rect_wrap(svg) {
    var width = svg.outerWidth(),
        height = svg.outerHeight(),
        svgRect = svg.find('rect'),
        x_pos_rect = svgRect.attr('x'),
        y_pos_rect = svgRect.attr('y');
    if (x_pos_rect) width = width - ( parseInt(x_pos_rect) * 2);
    if (y_pos_rect) height = height - ( parseInt(y_pos_rect) * 2);
    if ( (width * height) > 0 ) {
        svgRect.attr( 'width', width );
        svgRect.attr( 'height', height );
    }
}

function kidjoHover() {
    jQuery('svg.pc-dashes').each( function() {
        var svg = jQuery( this );
        kidjo_rect_wrap(svg);
    });
}
$(document).ready(function() {
      kidjoHover();
});

let alignRight = $('.alignright');
if(alignRight.length> 0) {
    alignRight.each(function(){
        $(this).parents('p').addClass('has_align-right-image');
    });
}

// dropdown-toggle class not added for submenus by current WP Bootstrap Navwalker as of November 15, 2017.
$('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('.dropdown', function (e) {
        $('.dropdown-menu > .dropdown .show').removeClass("show");
    });
    $('.dropdown-menu a.dropdown-toggle').removeClass("show_dropdown");
    if ($(this).next().hasClass('show')) {
        $(this).addClass("show_dropdown");
    }
    return false;
});


// function Menu_js() {
//     if ($('.dropdown').length) {
//         $('.dropdown > .dropdown-toggle').click(function () {
//             var location = $(this).attr('href');
//             window.location.href = location;
//             return false;
//         });
//     }
// }
// Menu_js();



}(jQuery));