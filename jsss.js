$(document).ready(function () {
    $(".card").click(function () {
      $(this).addClass("is-active");
    });

    $(".card.is-active").click(function (event) {
      if ($(event.target).closest(".card-body").length === 0) {
        $(this).removeClass("is-active zoom");
      }
    });

    $(".card.is-active .card-img-top").click(function () {
      $(this).closest(".card").toggleClass("zoom");
    });
  });
  $(document).ready(function () {
  $(".card").each(function () {
    var $card = $(this);
    var imageIndex = Math.floor(Math.random() * 1000) + 1;
    var imageUrl = "https://picsum.photos/seed/" + imageIndex + "/600/400";
    $card.find(".card-img-top").attr("src", imageUrl);
  });

  $(".card").click(function () {
    $(this).addClass("is-active");
  });

  $(".card.is-active").click(function (event) {
    if ($(event.target).closest(".card-body").length === 0) {
      $(this).removeClass("is-active zoom");
    }
  });

  $(".card.is-active .card-img-top").click(function () {
    $(this).closest(".card").toggleClass("zoom");
  });
});

