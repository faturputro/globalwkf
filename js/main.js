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

function drawLine(container, line){
  
  var pathLength = line.getTotalLength(),
      maxScrollTop = $(document).height() - $(window).height(),
      percentDone = $(window).scrollTop() / maxScrollTop,
      length = (percentDone * pathLength)*1.246;
  line.style.strokeDasharray = [ length ,pathLength].join(' ');
}
});
 
  $('#nav-tab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });



