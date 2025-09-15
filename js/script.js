$(document).ready(function () {

  $('.loc-slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    variableWidth: true, 
    arrows: false,
    dots: false
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  })

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
});

  // $(".main-menu li a").smoothScroll({
  //   speed: 1000,
  // });

  AOS.init();
});
