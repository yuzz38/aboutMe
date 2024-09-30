// tabs
$('.price__button > a').click( function(e) {
    e.preventDefault();
    $('.price__button > a').removeClass('active');
    $(this).addClass('active');
    $('.price__body').removeClass('active');
    $($(this).attr('href')).addClass('active');
   });
   // cookies
   if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $(".cookie-container").removeClass('hidden');
}
   $('.learn-more').on('click',function(e){
       e.preventDefault();
   document.cookie = "accepted_cookies=yes;"
   if (document.cookie = "accepted_cookies=yes;") {
    $(".cookie-container").addClass('hidden');
}
})


// burger 
$('.header__burger').click(function(e){
    e.preventDefault();
    $('.header__top').slideToggle();
  })
  $('.header__close').click(function(e){
    e.preventDefault();
    $('.header__top').slideToggle();
  })
// header on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $(".hed").addClass("hedscroll");
    }
    else {
      $(".hed").removeClass("hedscroll");
    }
}); 
// default swiper   
const swiper = new Swiper('.swiperowner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      // Navigation arrows
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  },
  });
// button top to body   
$(document).on("click","#spnTop",function(){
    $('html,body').animate({scrollTop: 0}, 500);
  
  });
// custom select    
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });