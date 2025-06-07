jQuery(document).ready(function (s) {
  $(".accordion-header").click(function () {
    // Toggle the active class on the clicked header
    $(this).toggleClass("active");

    // Slide toggle the corresponding content
    $(this).next(".accordion-content").slideToggle();

    // Remove active class from other headers and close other sections
    $(".accordion-header").not(this).removeClass("active");
    $(".accordion-content").not($(this).next()).slideUp();
  });

  // slider section
  $(".slider_proty").slick({
    dots: true,
    infinite: true,
    automatic: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // menu option
  $(".menu_icon").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".header_bottom ul").toggleClass("active");
  });
  $(".header_bottom ul li a").click(function () {
    if ($(window).width() <= 768) {
      $(".menu_icon").removeClass("active");
      $(".header_bottom ul").removeClass("active");
    }
  });
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".menu_icon").removeClass("active");
      $(".header_bottom ul").removeClass("active");
    }
  });

  // responsive accord
  // var e = s(window).width();
  // e <= 767 &&
  //   (s(".footer-column:first-child  ul").show(),
  //   s(".footer-column:first-child").addClass("open"),
  //   s(".footer-column h3").click(function () {
  //     s(this).next("ul").slideToggle(),
  //       s(this).parent(".footer-column").siblings().find("ul").slideUp(),
  //       s(this).parent(".footer-column").siblings().find("ul").slideUp(),
  //       s(this).parent(".footer-column").toggleClass("open"),
  //       s(this).parent(".footer-column").siblings().removeClass("open");
  //   }));
  var e = $(window).width();

  if (e <= 767) {
    // Hide all footer ul elements
    $(".footer-column ul").hide();

    // Show only the first one
    // $(".footer-column:first-child ul").show();
    // $(".footer-column:first-child").addClass("open");

    // Click handler
    $(".footer-icon").click(function () {
      var $currentColumn = $(this).parent(".footer-column");

      // Toggle current
      $currentColumn.find("ul").slideToggle();
      $currentColumn.toggleClass("open");

      // Close others
      $currentColumn
        .siblings(".footer-column")
        .removeClass("open")
        .find("ul")
        .slideUp();
    });
  }
});
