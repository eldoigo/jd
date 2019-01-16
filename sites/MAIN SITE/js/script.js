// JavaScript Document

//FONT & IMG FADE IN
$(document).ready(function () {
   'use strict';
	$('header').fadeIn(2000).removeClass('hidden');
	$('.box1').fadeIn(2000).removeClass('hidden');
	$('.box2').fadeIn(3000).removeClass('hidden');
	$('.box3').fadeIn(4000).removeClass('hidden');
	$('.breaker1 p').fadeIn(4000).removeClass('hidden');
	$('.hero-holder p').fadeIn(3000).removeClass('hidden');
	$('.js1').fadeIn(5000).removeClass('hidden');
	$('#hero1 p').fadeIn(3000).removeClass('hidden');	
});

// ON DIV SCROLL FADE IN
$(document).ready(function() {   
    'use strict';
    $(window).scroll( function(){   
        $('.hideme').each( function(){ 
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();     
            if( bottom_of_window > bottom_of_object ){      
                $(this).animate({'opacity':'1'},1000);}
        }); 
    }); 
});

// MAP BUTTON CLICKED - FADE IN RESPON MENU
$(document).ready(function(){
	'use strict';
	$('.button').click(function(){
		$('#resp-menu').fadeToggle(800);
	});
	});
// RESPONSIVE MENU EXIT BUTTON
$(document).ready(function(){
	'use strict';
	$('#exit').click(function(){
		$('#resp-menu').fadeOut(800);
	});
	});

//  PULL DOWN SLIDER FROM CAROSEL
$(document).ready(function(){
	'use strict';
	$('#cover1').click(function(){
		$('#pull1').fadeToggle(800);
	});
	
	
	
	
	});





// THE AMAZING DISAPPEARING NAV EFFECT - REAPPEAR ON SCROLL MAX TOP
   $(window).resize(function() {
	   'use strict';
   $("wrapper").height($(window).height());
   });

   (function ($) {
	   'use strict';
     $(document).ready(function(){
       $(function () {
         $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
              $('header').fadeOut();
           } else {
              $('header').fadeIn();}
       });
    });   	   
});   
}(jQuery));




