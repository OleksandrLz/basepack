$(function() {

$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".hidden-menu").slideToggle();
  return false;
});
	
$("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
	$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
$('.owl-carousel-clients').owlCarousel({
    loop:true,
    margin:10,
	dotsEach: 3,
//	autoplay: true,
    responsive:{
        0:{
            items:1
        },
		550:{
            items:3
		},
         1000:{
            items:3
        }
    }
});
	
$('.owl-carousel-quote').owlCarousel({
    loop:true,
    margin:10,
	dotsEach: true,
//	autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});		

$('.owl-carousel-team').owlCarousel({
    loop:true,
    margin:10,
	dotsEach: 3,
//	autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
	



});
