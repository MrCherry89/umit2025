$(document).ready(function () {

  $('.loc-slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    variableWidth: true, 
    arrows: false,
    dots: true,
    // autoplay: true,
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  })

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
    $(".header").toggleClass("bg");
});

  $(".request-btn").smoothScroll({
    speed: 1200,
  });

  $(".main-menu li a").smoothScroll({
    speed: 1200,
  });

  $(".main-menu li a").on("click", function(e){
    e.preventDefault();
    $(".main-menu").removeClass("open");
    $(".drop-menu").removeClass("is-active");
    $("body, html").removeClass("overflow");
    $(".header").removeClass("bg");
  })

  $('.info-images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  AOS.init();
});
