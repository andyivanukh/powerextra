$(document).ready(function(){
	$('.order_btn').click(function(){
		var top = $('.bottom_form').offset().top;
        $('body, html').animate({scrollTop: top }, 1500);
        return false;
  	});
	$('.slider').slick({
      slidesToShow:1,
      dots:false,
      arrows:true,
      infinite:false,
      slidesToScroll:1,
      responsive: [
          {
            breakpoint: 800,
            settings:{
              slidesToShow:1
            }
          },
          {
            breakpoint: 481,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
              arrows:true
            }
          },
          {
            breakpoint: 321,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
              arrows:true
            }
          }
      ]
 	 });
	$('.slider2').slick({
      slidesToShow:1,
      dots:false,
      arrows:true,
      infinite:false,
      slidesToScroll:1,
      responsive: [
          {
            breakpoint: 800,
            settings:{
              slidesToShow:2
            }
          },
          {
            breakpoint: 481,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
              arrows:true
            }
          },
          {
            breakpoint: 321,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
              arrows:true
            }
          }
      ]
 	 });
});

