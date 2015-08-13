// the accordion now known as sexyAccordian
/*$(document).ready(function($) {

  $('.accordion a').click(function(j) {
    var dropDown = $(this).closest('.accordion-navigation').find('.content');
    var activeLearnmore = $(this).closest('.accordion-navigation').find('.learn-more');

    $(this).closest('.accordion').find('.content').not(dropDown).slideUp('normal');
    $(this).closest('.accordion').find('.learn-more').not(activeLearnmore)[0].innerHTML = "learn more &nbsp;&nbsp;<img class='down-arrow' src='img/down.png'>";

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('.learn-more')[0].innerHTML = "learn more &nbsp;&nbsp;<img class='down-arrow' src='img/down.png'>";
    } 
    else {
      $(this).closest('.accordion').find('a.active').removeClass('active');
      $(this).addClass('active');
      $(this).find('.learn-more')[0].innerHTML = "close &nbsp;&nbsp;<img class='up-arrow' src='img/up.png'>";
    }

    dropDown.stop(false, true).slideToggle('normal');

    j.preventDefault();
  });
})(jQuery);*/

$(document).ready(function($){

  var oneAtTime = true; // if only want one open at a time
  
  $(".accordion .accordion-navigation a").click(function() {
    $(".accordion .accordion-navigation a").removeClass("active");
    if ( $(this).next(".content").is(":visible") ) {
      $(this).next(".content").slideUp();
    }
    else {
      if (oneAtTime == true) {
        $(".content").slideUp();
      }
      $(this).next(".content").slideDown();
      $(this).addClass("active");
    }
  });

  /*$(".audience-dev").click(function(){
      if ($.trim($(this).html()) === '<p><span class="position">audience <br class="show-for-small-only">development</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>') {
          $(this).html('<p><span class="position">audience <br class="show-for-small-only">development</span><span class="learn-more">learn more &nbsp;&nbsp;<img class="down-arrow" src="img/down.png"></span></p>');
      } 
      else {
          $(this).html('<p><span class="position">audience <br class="show-for-small-only">development</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>');        
      }
  });*/

  /*$(".content").hide(); 

  $(".audience-dev").click(function(){

      $(this).toggleClass("active").next().slideToggle("fast");
      
      if ($.trim($(this).html()) === '<p><span class="position">audience <br class="show-for-small-only">development</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>') {
          $(this).html('<p><span class="position">audience <br class="show-for-small-only">development</span><span class="learn-more">learn more &nbsp;&nbsp;<img class="down-arrow" src="img/down.png"></span></p>');
      } 
      else {
          $(this).html('<p><span class="position">audience <br class="show-for-small-only">development</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>');        
      }
      
      return false; 
  });

  $(".design").click(function(){

      $(this).toggleClass("active").next().slideToggle("fast");
      
      if ($.trim($(this).html()) === '<p><span class="position">design</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>') {
          $(this).html('<p><span class="position">design</span><span class="learn-more">learn more &nbsp;&nbsp;<img class="down-arrow" src="img/down.png"></span></p>');
      } 
      else {
          $(this).html('<p><span class="position">design</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>');        
      }
      
      return false; 
  });

  $(".editorial").click(function(){

      $(this).toggleClass("active").next().slideToggle("fast");
      
      if ($.trim($(this).html()) === '<p><span class="position">editorial</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>') {
          $(this).html('<p><span class="position">editorial</span><span class="learn-more">learn more &nbsp;&nbsp;<img class="down-arrow" src="img/down.png"></span></p>');
      } 
      else {
          $(this).html('<p><span class="position">editorial</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>');        
      }
      
      return false; 
  });

  $(".marketing").click(function(){

      $(this).toggleClass("active").next().slideToggle("fast");
      
      if ($.trim($(this).html()) === '<p><span class="position">marketing</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>') {
          $(this).html('<p><span class="position">marketing</span><span class="learn-more">learn more &nbsp;&nbsp;<img class="down-arrow" src="img/down.png"></span></p>');
      } 
      else {
          $(this).html('<p><span class="position">marketing</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>');        
      }
      
      return false; 
  });

  $(".tech").click(function(){

      $(this).toggleClass("active").next().slideToggle("fast");
      
      if ($.trim($(this).html()) === '<p><span class="position">tech</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>') {
          $(this).html('<p><span class="position">tech</span><span class="learn-more">learn more &nbsp;&nbsp;<img class="down-arrow" src="img/down.png"></span></p>');
      } 
      else {
          $(this).html('<p><span class="position">tech</span><span class="learn-more">close &nbsp;&nbsp;<img class="down-arrow" src="img/up.png"></span></p>');        
      }
      
      return false; 
  });

  /*$('.accordion .accordion-navigation a').click(function(j) {

    var targetElement = $(this).next('.content');

    targetElement.slideToggle();
    targetElement.siblings('.content').slideUp();

  });*/

   /*$("a[href='" + window.location.hash + "']").parent(".intern-department").click();*/

});

















