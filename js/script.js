// JavaScript Document

//Scroll Effect


(function($) {
'use strict';
    $.fn.fadeDelay = function(delay) {

        var that = $(this);
        delay = delay || 3000;

        return that.each(function() {

            $(that).queue(function() {

                setTimeout(function() {

                    $(that).dequeue();

                }, delay);
            });

            $(that).fadeOut('slow');
        });
    };

})(jQuery);

$('.loading').fadeDelay(3500);


$('a').click(function(){
	'use strict';
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 1200);
	return false;
});

$(document).ready(function() {  
	'use strict';
    $(window).scroll( function(){   
        $('.hideme').each( function(){ 
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();     
            if( bottom_of_window > bottom_of_object ){      
                $(this).animate({'opacity':'0.8'},1600);}
        }); 
    }); 
});


(function($) {
	'use strict';
  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  'use strict';
  $(".module").each(function(i, el) {
	  
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

