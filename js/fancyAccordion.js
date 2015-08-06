$(document).ready(function($) {

  $('.accordion a').click(function(j) {
    var dropDown = $(this).closest('li').find('.content');
    //var activeLearnmore = $(this).closest('li').find('learn-more');

    $(this).closest('.accordion').find('.content').not(dropDown).slideUp('normal');
    //$(this).closest('.accordion').find('.learn-more').not(activeLearnmore)[0].innerHTML = "learn more &nbsp;&nbsp;<img class='down-arrow' src='img/down.png'>";

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('.learn-more')[0].innerHTML = "learn more &nbsp;&nbsp;<img class='down-arrow' src='img/down.png'>";
    } else {
      $(this).closest('.accordion').find('a.active').removeClass('active');
      $(this).addClass('active');
      $(this).find('.learn-more')[0].innerHTML = "close &nbsp;&nbsp;<img class='up-arrow' src='img/up.png'>";
    }

    dropDown.stop(false, true).slideToggle('normal');

    j.preventDefault();
  });
})(jQuery);