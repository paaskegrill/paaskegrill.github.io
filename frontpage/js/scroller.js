$(document).ready(function(){
  
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
      
      event.preventDefault();

      
      var hash = this.hash;

      // jQuery's animate() (800) specifies the number of milliseconds 
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        
        window.location.hash = hash;
      });
    } 
  });
});

	