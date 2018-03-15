$(document).ready(function(){
    
    $('.carousel').slick({
        
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });   
    
    /*
    var scrollDistance = 0;
    
    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        
        if (currentScroll - scrollDistance > 50) {
            var navbarHeight = $('.navbar').css('height');
            $('navbar').animate({top: '-' + navbarHeight}, 150);
            scrollDistance = currentScroll;
            
            
        } else if (scrollDistance - currentScroll > 50) {
            $('navbar').animate({top: '0px'}, 150);
            scrollDistance = currentScroll;
        }
          
    });  */
    
        var lastScrollTop = 0;
      $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if (scrollTop - lastScrollTop > 50){
          var navHeight = $('.navbar').css('height');
          $('.navbar').animate({top: '-' + navHeight}, 150);
          lastScrollTop = scrollTop;


        } else if (lastScrollTop - scrollTop > 50) {
          $('.navbar').animate({top: '0px'}, 150);
          lastScrollTop = scrollTop;
        }
      });
    
    
    
    
    
    
    
    
    
    
    
});