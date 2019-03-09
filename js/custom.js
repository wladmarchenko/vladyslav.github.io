jQuery(document).ready(function() {
    "use strict";


    /* ===================================
		PRELOADER
	====================================== */
	// makes sure the whole site is loaded
	jQuery(window).load(function() {
	        // will first fade out the loading animation
	    jQuery(".status").fadeOut();
	        // will fade out the whole DIV that covers the website.
	    jQuery(".preloader").delay(1000).fadeOut("slow");
	});


	/* ===================================
		STICKY
	====================================== */
	$(window).on('ready , scroll', function() {
	    if ($(window).scrollTop() > 30) {
	        $('.clean-main-menu').addClass('minified');
	    } else {
	        $('.clean-main-menu').removeClass('minified');
	    }
	});

	/* ===================================
		HIDE MENU ON CLICK
	====================================== */
  	jQuery(".nav a").on("click", function () {
      	jQuery("#nav-menu").removeClass("in").addClass("collapse");
 	 });

	/* ===================================
		ONE PAGE NAV
	====================================== */
	$('#nav-menu').onePageNav({
	    currentClass: 'active',
	    scrollSpeed: 500,
	    easing: 'linear'
	});

	/* ===================================
		WOW JS
	====================================== */
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       250,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    }
	  }
	);
	wow.init();


	/* ===================================
		SCROLLUP
	====================================== */
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 300, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 5000, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: 'Scroll to top', // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
		scrollImg: true, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});


	/* ===================================
		COROUSEL SLIDER
	====================================== */
	// Team Slider
	$("#team-slider").owlCarousel({
		items : 3,
		itemsDesktop: [1199,2],
		itemsDesktopSmall: [979,2],
		itemsTablet: [768,2],
		itemsMobile : [520,1],
		autoPlay: 4000,
		navigation : false
	});

	/* ===================================
		STELLAR
	====================================== */
	$(window).stellar({
		responsive: true,
	    positionProperty: 'position'
	});


	/* ===================================
		ISOTOPE
	====================================== */
	  var $container = $('.clean-portfolio-items');

	  // filter items on button click
	   $container.isotope({
	          filter: '*',
	          itemSelector: '.item',
	          animationOptions: {
	              duration: 750,
	              easing: 'linear',
	              queue: false
	          }
	      });


	  $('#clean-portfolio-filter ul li a').on('click',function(){
	      var selector = $(this).attr('data-filter');
	      $container.isotope({
	          filter: selector,
	          animationOptions: {
	              duration: 750,
	              easing: 'linear',
	              queue: false
	          }
	      });
	    return false;
	  });

	  var $optionSets = $('#clean-portfolio-filter ul'),
	         $optionLinks = $optionSets.find('a');

	         $optionLinks.on('click',function(){
	            var $this = $(this);
	        // don't proceed if already selected
	        if ( $this.hasClass('selected') ) {
	            return false;
	        }
	     var $optionSet = $this.parents('#clean-portfolio-filter ul');
	     $optionSet.find('.selected').removeClass('selected');
	     $this.addClass('selected');
	  });


	/* ===================================
		SLIDER
	====================================== */
	$( '#clean-slider' ).sliderPro({
		width: '100%',
	    height: 768,
	    fade: true,
	    arrows: true,
	    waitForLayers: true,
	    buttons: true,
	    autoplay: true,
	    autoScaleLayers: false,
	    imageScaleMode: 'cover',
	    slideAnimationDuration: 1500,
	    breakpoints: {
	        600: {
	            height: 480
	        }
		}
	});

});
