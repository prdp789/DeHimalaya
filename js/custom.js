$(function(){
	

	 // owl carousel
	 // home
	 if($(".home-owl-carousel".length > 0)){
		  $(".home-owl-carousel").owlCarousel({
	        items : 2,
	        lazyLoad : false,
	        autoPlay : true,
	        navigation : true,
	        navigationText :  true,
	        pagination : false,
	      });

      }

      // horizontal tab
      //single
      if($("#horizontalTab.single").length > 0){
	      $('#horizontalTab.single').easyResponsiveTabs({
	            type: 'default', //Types: default, vertical, accordion           
	            width: 'auto', //auto or any width like 600px
	            fit: true   // 100% fit in a container
	        });
      }
     // flexslider
     // single
     if($('.flexslider.single').length > 0){
      	$('.flexslider.single').flexslider({
		    animation: "slide",
		    controlNav: "thumbnails"
		  });
	  }

	  //wow js
	 	new WOW().init();
});