// Global Wakaf v1 by Faturachman Dwi Putro
// https://faturputro.github.io

    $(document).ready(function(){

 // News Tab
   $('.sub-news a').hover(function(e){
    e.preventDefault();
    $(this).tab('show');

    $('a[data-toggle="tab"]').on('shown.bs.tab',function(e) {
      $('.tab-pane').not($(this).attr('href')).removeClass('active');
    })
  });

  // Slick
  $('.header-carousel , .header-carousel-mobile').slick({
    adativeHeight:true,
    autoplay:true,
    arrows:false,
    autoplaySpeed:5000,
    fade:true
  });

// Get Form Values
$('#formVal').on('click',function(){
    $('form-review').removeClass('d-none');
    $(this).hide();
    console.log('clicked wakaf');
   });

// Mobile Toggle
$(".toggle-nav").click(function(){
      $("#menu").toggleClass("active");
      $(".mobile-container").toggleClass("active");
});

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
// chevron rotate
$(".rotate").click(function(){
 $(this).toggleClass("down")  ; 
})

});