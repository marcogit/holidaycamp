/* Javascript */
(function () {
  var swiper1 = new Swiper(".simpleSwiper", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  var swiper2 = new Swiper(".sublistSwiper", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper3 = new Swiper(".cardSwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    freeMode: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  var swiper4 = new Swiper(".gallerySwiper", {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  var swiper5 = new Swiper(".herogallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // Pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $("#galleryfullModal").on("shown.bs.modal", function () {
    var swiper6a = new Swiper(".thumbherogallerySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        600: {
          slidesPerView: 7,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper6b = new Swiper(".fullherogallerySwiper", {
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      // Pagination
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Thumbs
      thumbs: {
        swiper: swiper6a,
      },
    });
  });

  $("#itemModal").on("shown.bs.modal", function () {
    var swiper7a = new Swiper(".thumbitemgallerySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      on: {
        init: (swiper) => {
          let totalGap =
            swiper.passedParams.spaceBetween *
            (swiper.passedParams.slidesPerView - 1);
          let containerHeight =
            swiper.passedParams.slidesPerView * swiper.slides[0].clientHeight +
            totalGap;
          swiper.el.style.height = containerHeight + "px";
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Responsive
      breakpoints: {
        991: {
          direction: "vertical",
        },
      },
    });
    var swiper7b = new Swiper(".fullitemgallerySwiper", {
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      // Pagination
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Thumbs
      thumbs: {
        swiper: swiper7a,
      },
    });
  });

  /*-- Tooltips --*/
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  /*-- Header Scroll --*/
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".main-header").removeClass("normal").addClass("sticky");
    } else if (scroll < 100) {
      $(".main-header").removeClass("sticky").addClass("normal");
    }
    if (scroll >= 100) {
      $(".fixed-nav--detail-results").removeClass("normal").addClass("sticky");
    } else if (scroll < 100) {
      $(".fixed-nav--detail-results").removeClass("sticky").addClass("normal");
    }
  });

  /*-- Search Scroll --*/
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".fixed-search--mobile").removeClass("normal").addClass("sticky");
    } else if (scroll < 100) {
      $(".fixed-search--mobile").removeClass("sticky").addClass("normal");
    }
  });

  /*-- Detail Menu Scroll --*/
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 675) {
      $(".wrapper-detail--menu").removeClass("normal").addClass("sticky");
    } else if (scroll < 675) {
      $(".wrapper-detail--menu").removeClass("sticky").addClass("normal");
    }
  });

  /*-- Menu responsive --*/
  $("#navbar-toggler--control").click(function () {
    $("#mainHeader").toggleClass("main-header--full");
  });

  /*-- Seidebar Filter --*/
  $("#filters-aside--show").click(function () {
    $("#filters-aside--panel").addClass("filters-aside--full");
  });
  $("#filters-aside--hide").click(function () {
    $("#filters-aside--panel").removeClass("filters-aside--full");
  });
})();
