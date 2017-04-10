$(window).scroll(function() {
  if ($(document).scrollTop() > 160) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
