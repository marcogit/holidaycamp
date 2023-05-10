/* Javascript */
// RANGO DE PRECIOS - Llamar a la función updateActiveBars al inicio y en cada cambio en el slider
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
  /*-- Datepicker --*/
  var dateFormat = "dd/mm/yy",
    from = $("#from").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onSelect: function (selectedDate) {
        to.datepicker("option", "minDate", selectedDate);
      },
      beforeShowDay: function (date) {
        var startDate = getDate(from); // Fecha de inicio del rango
        var endDate = getDate(to); // Fecha de fin del rango

        // Verificar si la fecha está dentro del rango
        if (date >= startDate && date <= endDate) {
          return [true, "active", "Dentro del rango"]; // Aplicar clase "active"
        }

        return [true, "", ""];
      },
    }),
    to = $("#to").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onSelect: function (selectedDate) {
        from.datepicker("option", "maxDate", selectedDate);
      },
      beforeShowDay: function (date) {
        var startDate = getDate(from); // Fecha de inicio del rango
        var endDate = getDate(to); // Fecha de fin del rango

        // Verificar si la fecha está dentro del rango
        if (date >= startDate && date <= endDate) {
          return [true, "active", "Dentro del rango"]; // Aplicar clase "active"
        }

        return [true, "", ""];
      },
    });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.val());
    } catch (error) {
      date = null;
    }

    return date;
  }

  // Datepicker en español -
  $.datepicker.regional["es"] = {
    closeText: "Cerrar",
    prevText: "< Ant",
    nextText: "Sig >",
    currentText: "Hoy",
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthNamesShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"],
    dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
    weekHeader: "Sm",
    dateFormat: "dd/mm/yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
  };
  $.datepicker.setDefaults($.datepicker.regional["es"]);

  $(function () {
    $("#datepicker").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      numberOfMonths: 1,
    });
  });

  // RANGO DE PRECIOS -
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

  $("#mapModal").on("shown.bs.modal", function () {
    $("#slider-range--map").slider({
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
