
!(function($) {
  "use strict";
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
    let mouseCursor = document.querySelector('.mouse-block');
    let mouseImg = document.querySelector('.mouse');
    window.addEventListener('mousemove', function(e){
        // mouseCursor.classList.remove('mouse-click');
        mouseCursor.setAttribute("style",`visibility: visible;top:${e.pageY}px;left:${e.pageX}px;`);
        mouseImg.setAttribute("style",`transform:scale(1);`);
    });
    document.addEventListener('click',()=>{
      mouseImg.setAttribute("style",`animation: mouse 700ms forwards linear;`);
    });

    // Flip book
    
});

  
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

function RandomObjectMover(obj, container, xCod, yCod) {
	this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = 100;
  this.current_position = { x: xCod, y: yCod };
  this.is_running = false;
}

// Set the speed of movement in Pixels per Second.
RandomObjectMover.prototype.setSpeed = function(pxPerSec) {
	this.pixels_per_second = pxPerSec;
}

RandomObjectMover.prototype._getContainerDimensions = function() {
   if (this.$container === window) {
       return { 'height' : this.$container.innerHeight, 'width' : this.$container.innerWidth };
   } else {
   	   return { 'height' : this.$container.clientHeight, 'width' : this.$container.clientWidth };
   }
}

RandomObjectMover.prototype._generateNewPosition = function() {

	// Get container dimensions minus div size
  var containerSize = this._getContainerDimensions();
	var availableHeight = containerSize.height - this.$object.clientHeight;
  var availableWidth = containerSize.width - this.$object.clientHeight;
    
  // Pick a random place in the space
  var y = Math.floor(Math.random() * availableHeight);
  var x = Math.floor(Math.random() * availableWidth);
    
  return { x: x, y: y };    
}

RandomObjectMover.prototype._calcDelta = function(a, b) {
	var dx   = a.x - b.x;         
  var dy   = a.y - b.y;         
  var dist = Math.sqrt( dx*dx + dy*dy ); 
  return dist;
}

RandomObjectMover.prototype._moveOnce = function() {
		// Pick a new spot on the page
    var next = this._generateNewPosition();
    
    // How far do we have to move?
    var delta = this._calcDelta(this.current_position, next);
    
		// Speed of this transition, rounded to 2DP
		var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;
    
    //console.log(this.current_position, next, delta, speed);
          
    this.$object.style.transition='transform '+speed+'s linear';
    this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';
    
    // Save this new position ready for the next call.
    this.current_position = next;
  
};

RandomObjectMover.prototype.start = function() {

	if (this.is_running) {
  	return;
  }

	// Make sure our object has the right css set
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
	
  this.boundEvent = this._moveOnce.bind(this)
  
  // Bind callback to keep things moving
  this.$object.addEventListener('transitionend', this.boundEvent);
  
  // Start it moving
  this._moveOnce();
  
  this.is_running = true;
}

RandomObjectMover.prototype.stop = function() {

	if (!this.is_running) {
  	return;
  }
  
  this.$object.removeEventListener('transitionend', this.boundEvent);
  
	this.is_running = false;
}

