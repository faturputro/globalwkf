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
      length = (percentDone * pathLength)*1.246;
  line.style.strokeDasharray = [ length ,pathLength].join(' ');
}

});

   $('.news-1').on('click',function(){
      $('#defaultNews').addClass('d-none');
      $('#secondNews').removeClass('d-none');
    });

   $('.news-2').on('click',function(){
      $('#defaultNews').addClass('d-none');
      $('#thirdNews').removeClass('d-none');
    });

   $('.news-3').on('click',function(){
      $('#defaultNews').addClass('d-none');
      $('#fourthNews').removeClass('d-none');
    });

    // Counter

