// Global Wakaf v1 by Faturachman Dwi Putro
// https://faturputro.github.io

    $(document).ready(function(){

$(window).scroll(function() {
  drawLine( $('#route'),
            document.getElementById('path') );
});

// init the line length
  drawLine( $('#route'),
            document.getElementById('path') );

//draw the line
function drawLine(container, line){
  
  var pathLength = line.getTotalLength(),
      maxScrollTop = $(document).height() - $(window).height(),
      percentDone = $(window).scrollTop() / maxScrollTop,
      length = (percentDone * pathLength)*1.5;
  line.style.strokeDasharray = [ length ,pathLength].join(' ');
};
 
 // News Tab
   $('.sub-news a').hover(function(e){
    e.preventDefault();
    $(this).tab('show');

    $('a[data-toggle="tab"]').on('shown.bs.tab',function(e) {
      $('.tab-pane').not($(this).attr('href')).removeClass('active');
    })
  });

  // Slick
  $('.header-carousel').slick({
    dots:true,
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
$("#nav-toggle").click(function(){
      $("#menu").toggleClass("active");
      $(".mobile-container").toggleClass("active");
});
// chevron rotate
$(".rotate").click(function(){
 $(this).toggleClass("down")  ; 
})

});