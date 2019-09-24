(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 800);
			return false;
		});
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// menu

		$(document).ready(function(){
				$('.menu-toggle').click(function(){
					$('nav').toggleClass('active')
				})
			
				$('ul li').click(function(){
					$(this).siblings().removeClass('active');
					$(this).toggleClass('active');
				})
			})


		// slider-one

		$('.products-slider').owlCarousel({
              loop: true,
              margin: 20,
              center: true,
              nav: false,
              dots: false,
              autoplay:true,
                        autoplayTimeout:2000,
              responsiveClass: true,
              responsiveRefreshRate: true,
              responsive : {
                  0 : {
                      items: 1
                  },
                  768 : {
                      items: 1
                  },
                  960 : {
                      items: 1
                  },
                  1200 : {
                      items: 1
                  },
                  1920 : {
                      items: 1
                  }
              }
        });


		// team-slider

		$('.teem').owlCarousel({
              loop: true,
              margin: 20,
              center: true,
              nav: false,
              dots: true,
              autoplay:true,
              autoplayTimeout:2000,
              responsiveClass: true,
              responsiveRefreshRate: true,
              responsive : {
                  0 : {
                      items: 1
                  },
                  768 : {
                      items: 1
                  },
                  960 : {
                      items: 2
                  },
                  1200 : {
                      items: 4
                  },
                  1920 : {
                      items: 4
                  }
              }
        });

		
		// arif

		$('.arif').owlCarousel({
              loop: true,
              margin: 20,
              center: true,
              nav: false,
              dots: true,
              autoplay:true,
              autoplayTimeout:2000,
              responsiveClass: true,
              responsiveRefreshRate: true,
              responsive : {
                  0 : {
                      items: 1
                  },
                  768 : {
                      items: 3
                  },
                  960 : {
                      items: 3
                  },
                  1200 : {
                      items: 3
                  },
                  1920 : {
                      items: 3
                  }
              }
        });



        // logoo	
		

		$('.logoo').owlCarousel({
              loop: true,
              margin: 20,
              center: true,
              nav: false,
              dots: true,
              autoplay:true,
              autoplayTimeout:2000,
              responsiveClass: true,
              responsiveRefreshRate: true,
              responsive : {
                  0 : {
                      items: 1
                  },
                  768 : {
                      items: 3
                  },
                  960 : {
                      items: 3
                  },
                  1200 : {
                      items: 5
                  },
                  1920 : {
                      items: 5
                  }
              }
        });
		
		
		
		
		
		
		
	});
})(jQuery);