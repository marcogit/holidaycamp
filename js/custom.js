/* Javascript */
// Llamar a la función updateActiveBars al inicio y en cada cambio en el slider
function updateActiveBars(uiValues) {
  // Obtener los valores del slider
  var minValue = uiValues[0];
  var maxValue = uiValues[1];

  

  // Obtener todas las barras
  var bars = $("#price-slider .p-bar");

  // Iterar sobre cada barra y añadir/eliminar la clase "active"
  bars.each(function (index, bar) {
    var barValue = (index / (bars.length - 1)) * 1000;
    if (barValue >= minValue && barValue <= maxValue) {
      $(bar).addClass("active");
    } else {
      $(bar).removeClass("active");
    }
  });
}

(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [100, 500],
    slide: function (event, ui) {
      $("#amount-min").val(ui.values[0] + "€ min.");
      $("#amount-max").val(ui.values[1] + "€ max.");

      // Actualizar las barras activas
      updateActiveBars(ui.values);
    },
  });

  // Inicializar las barras activas
  updateActiveBars($("#slider-range").slider("values"));

  $(".cardSwiper").flickity({
    initialIndex: 0,
    cellAlign: "left",
    prevNextButtons: true,
    freeScroll: true,
    pageDots: false,
  });

  $(".gallerySwiper").flickity({
    initialIndex: 0,
    wrapAround: true,
    cellAlign: "center",
    setGallerySize: true,
    lazyLoad: true,
    prevNextButtons: true,
    pageDots: false,
  });

  $(".herogallerySwiper").flickity({
    initialIndex: 0,
    wrapAround: true,
    cellAlign: "center",
    autoPlay: 4000,
    setGallerySize: true,
    prevNextButtons: true,
    draggable: false,
  });

  $(".simpleSwiper").flickity({
    initialIndex: 0,
    cellAlign: "left",
    setGallerySize: true,
    lazyLoad: true,
    prevNextButtons: true,
  });

  $(".sublistSwiper").flickity({
    initialIndex: 0,
    cellAlign: "left",
    setGallerySize: true,
    lazyLoad: true,
    prevNextButtons: true,
    pageDots: false,
  });

  $("#galleryfullModal").on("shown.bs.modal", function () {
    $(".thumbherogallerySwiper").flickity({
      initialIndex: 0,
      cellAlign: "left",
      setGallerySize: true,
      asNavFor: ".fullherogallerySwiper",
      contain: true,
      prevNextButtons: true,
      pageDots: false,
    });

    $(".fullherogallerySwiper").flickity({
      initialIndex: 0,
      cellAlign: "left",
      setGallerySize: true,
      asNavFor: ".thumbherogallerySwiper",
      lazyLoad: true,
      prevNextButtons: true,
    });
  });

  $("#itemModal").on("shown.bs.modal", function () {
    $(".thumbitemgallerySwiper").flickity({
      initialIndex: 0,
      cellAlign: "left",
      setGallerySize: true,
      asNavFor: ".fullitemgallerySwiper",
      contain: true,
      prevNextButtons: true,
      pageDots: false,
    });

    $(".fullitemgallerySwiper").flickity({
      initialIndex: 0,
      cellAlign: "left",
      setGallerySize: true,
      asNavFor: ".thumbitemgallerySwiper",
      lazyLoad: true,
      prevNextButtons: true,
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

  /*-- Sidebar Filter --*/
  $("#filters-aside--show").click(function () {
    $("#filters-aside--panel").addClass("filters-aside--full");
  });
  $("#filters-aside--mapshow").click(function () {
    $("#filters-aside--panel").addClass("filters-aside--full");
  });
  $("#filters-aside--hide").click(function () {
    $("#filters-aside--panel").removeClass("filters-aside--full");
  });
})();
