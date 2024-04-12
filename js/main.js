// Burger
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      $('.navbar-toggler').toggleClass('open-menu');
      $('.navbar').toggleClass('border-b-gray');
    });
  });

// Mobile

$('.navbar-toggler').click(function(){
    $('.navbar').toggleClass('bg-blue');
    $('.navbar').toggleClass('h-auto');
    $('.overlay').toggleClass('d-block');
    $('.mobile').toggleClass('d-none');
});

$('.navbar-mobile .nav-link').click(function() {
  if($('.navbar-toggler').css('display') !='none'){
    $(".navbar-toggler").trigger( "click" );
    $('.navbar').toggleClass('bg-blue');
    $('.navbar').toggleClass('h-auto');
    $('.overlay').toggleClass('d-block');
    $('.mobile').toggleClass('d-none');
    $('.navbar-toggler').toggleClass('open-menu');
  }
});

$(document).scroll(function(e) {
    $(window).scrollTop() > 100 ? $('.main .navbar').addClass('bg-dark-blue') : $('.main .navbar').removeClass('bg-dark-blue');
});

// Slider
$(document).ready(function(){
  $('.slider').slick({
    arrows: true
  });
  $('.miniature').slick({
      slidesToShow: 4,
      asNavFor: '.slider',
      focusOnSelect: true,
      arrows: false
  });
});
