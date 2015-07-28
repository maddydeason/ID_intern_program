$(document).ready(function() {
  $(".accordion").on("click", "li", function () {
    $("li.active").find(".content").slideUp("normal");
    if(!$(this).hasClass("active")) {
      $(this).find(".content").slideToggle("normal");
    }
  });
});