// this is for the content to appear when scrolling to it .its only init so you have to include 'wow.js' and 'animate.css'    
new WOW().init();
// this is for smooth scrolling as you can see it s using jquery so you must include it if you want re use this code
$(document).ready(function(){
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 650, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  // the responsive carousel , the one that I used is 'owl'
  $("#owl").owlCarousel({
    items : 4 ,
    itemsTablet : [768,2] ,
    itemsMobile : [479,1] , 
    navigation : true , 
    autoPlay : 3000
  });
})