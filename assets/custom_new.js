setInterval(function () {
  if($(".Page_announcement_bar_main_new").length > 0)
  {
    var Page_announcement_bar_main_new = $(".Page_announcement_bar_main_new").outerHeight(true);
    $(".header_lp_new").css("margin-top", Page_announcement_bar_main_new+"px");
  }
},1000)

$(".accordion .question").click(function(){
  if($(this).parent(".accordion li").hasClass("open") == false)
  {
    $(".accordion .answer").slideUp();
    $(".accordion li").removeClass("open");
    
  	$(this).next(".answer").slideDown();
  	$(this).parent(".accordion li").addClass("open");
  } 
  else
  {
  	$(".accordion .answer").slideUp();
    $(".accordion li").removeClass("open");
  }
})

$(".mp4_play_video_new").click(function() {
  if($(this).hasClass("active") == false)
  {
    $(".play_video_new").fadeIn();
    $(".mp4_play_video_new video").trigger('pause');
    $(".mp4_play_video_new").removeClass("active");
    $(this).find(".play_video_new").fadeOut();
    $(this).find('video').trigger('play');
    $(this).addClass("active");
  }
  else
  {
    $(".play_video_new").fadeIn();
    $(".mp4_play_video_new video").trigger('pause');
    $(".mp4_play_video_new").removeClass("active");
  }
})

/* Index_announcement_slider */
new Swiper('.Page_announcement_slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 0,
  slidesPerView: 1,
  watchSlidesProgress: true,
  draggable:!0,
  autoHeight:!1,
  watchOverflow:!0,
  threshold:10,
  mousewheel:{
    forceToAxis:!0
  },
  //freeMode:!0,
  effect: "fade",
  /*autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }*/
})

/* Page_videos_images_slider */
new Swiper('.Page_videos_images_slider', {
  loop: false,
  grabCursor: false,
  spaceBetween: 48,
  slidesPerGroup: 1,
  slidesPerView: 3,
  watchSlidesProgress: true,
  draggable:!0,
  autoHeight:!1,
  watchOverflow:!0,
  threshold:10,
  mousewheel:{
    forceToAxis:!0
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 48,
    }
  }
})

/* Page_testimonials_slider */
new Swiper('.Page_testimonials_slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 27,
  slidesPerGroup: 1,
  slidesPerView: 3,
  watchSlidesProgress: true,
  draggable:!0,
  autoHeight:!1,
  watchOverflow:!0,
  threshold:10,
  centeredSlides: true,
  mousewheel:{
    forceToAxis:!0
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
    }
  }
})

/* Page_bfcm_testimonials_slider */
new Swiper('.Page_bfcm_testimonials_slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 27,
  slidesPerGroup: 1,
  slidesPerView: 3,
  watchSlidesProgress: true,
  draggable:!0,
  autoHeight:!1,
  watchOverflow:!0,
  threshold:10,
  centeredSlides: true,
  mousewheel:{
    forceToAxis:!0
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
    }
  }
})

/* Page_uestion_answer_slider */
new Swiper('.Page_uestion_answer_slider', {
  loop: false,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerGroup: 1,
  slidesPerView: 3,
  watchSlidesProgress: true,
  draggable:!0,
  autoHeight:!0,
  watchOverflow:!0,
  threshold:10,
  mousewheel:{
    forceToAxis:!0
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight:!1,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight:!0,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1128: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
})

/* Page_quote_slider */
new Swiper('.Page_quote_slider', {
  loop: false,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerGroup: 1,
  slidesPerView: 3,
  watchSlidesProgress: true,
  draggable:!0,
  autoHeight:!1,
  watchOverflow:!0,
  threshold:10,
  mousewheel:{
    forceToAxis:!0
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1128: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
})



document.addEventListener('variant:change', function(evt) {
  console.log({evt})
  console.log(evt.detail.variant);

  var variant_available = evt.detail.variant.available;
  var variant_price = evt.detail.variant.price;
  var variant_compare_at_price = evt.detail.variant.compare_at_price;
  var variant_name = evt.detail.variant.title;

  var option1 = evt.detail.variant.option1;
  var option2 = evt.detail.variant.option2;

  $(".product_grid_right_new [data-color-new-label]").html(option1);
  $(".product_grid_right_new [data-device-label]").html(option2);
  var option2_handle = option2.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '');
  $(".product_grid_right_new [data-device-label]").attr("popup_id",option2_handle);

  var total_price = variant_price;
  $('[js-data-product-total-price]').html(theme.Currency.formatMoney(total_price, theme.settings.moneyFormat));

  var save_price = variant_compare_at_price - variant_price
  
  if(variant_compare_at_price > variant_price)
  {
    $('[js-data-save-price]').html("Save <br>"+theme.Currency.formatMoney(save_price, theme.settings.moneyFormat));
    $('[js-data-save-price]').removeClass("hide");
  }
  else
  {
    $('[js-data-save-price]').addClass("hide");
  }
  
});

$(".product_grid_right_new .variant__label-info").click(function() {
  var ID = $(this).find("[data-device-label]").attr("popup_id");
  $("."+ID+"_popup").fadeToggle();
})
$(".small_popup_close_new").click(function() {
  $(".small_popup_new").fadeOut();
})

$(document).mouseup(function(e) 
{
    var container = $(".small_popup_new, .variant__label-info");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".small_popup_new").fadeOut();
    }
});

$('a[href^="#"]').on('click', function(event) {
  var target = $($(this).attr('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 500);
  }
});

document.addEventListener('variant:change', function(event) {
  // You might use something like this to write a pre-order feature or a
  // custom swatch feature.
  var variant = event.detail.variant;
  var container = event.target;
  if (variant) {
    //console.log('Variant —————————— ↓');
    //console.log(variant.title);
    // ... update some element on the page
    const variant_id = variant.id;
    if(variant_id){
      if($(".product__ingedients-container").length > 0)
      {
        //console.log(variant_id);
        if($('.product__ingedients-container')[0]){
          document.querySelectorAll(`.product__ingedients-container`).forEach((product_variant) => product_variant.classList.remove('active'));
          document.getElementById(`variant-ingredients-${variant_id}`).classList.add('active');
        }
        /*if($('.product__ingedients-container_1')[0]){
          document.querySelectorAll(`.product__ingedients-container_1`).forEach((product_variant) => product_variant.classList.remove('active'));
          document.getElementById(`variant-ingredients-1-${variant_id}`).classList.add('active');
        }*/
      }
    }
  }
});
