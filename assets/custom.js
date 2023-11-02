const minusBtn = document.querySelectorAll(".product_custom_qty .minus-btn"),
      plusBtn = document.querySelectorAll(".product_custom_qty .plus-btn");
let   quantityInput = ''

plusBtn?.forEach(element => {
  element?.addEventListener("click", (e) => {

    quantityInput = e.target.previousElementSibling;
    quantityInput.value = Number(quantityInput.value) + 1;

  });
});

minusBtn?.forEach(element => {
  element?.addEventListener("click", (e) => {

    quantityInput = e.target.nextElementSibling;

    if (quantityInput.value > 1) {
      quantityInput.value = Number(quantityInput.value) - 1;
    }

  });
});

window.addEventListener("load", (event) => {

  $('.tabs_container.show_on_mobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true
  });

  $('.carrousel_container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.videos-container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    draggable: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          draggable: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
          adaptiveHeight: true
        }
      }
    ]
  });


  //function in charge of Tab selection on hovering - Landing Page Clutch Pro

  // Show the first tab and hide the rest
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav li').mouseenter(function(){
    $('#tabs-nav li').removeClass('active');
  // $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  $('#tabs-nav li').mouseleave(function(){
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
  });

  if (document.querySelector('.template-product')) {

    document.querySelector('.product-single__meta .overlay-preview-badges').addEventListener('click', (e) => {

      const element = document.querySelector('#judgeme_product_reviews'),
            imagesHeight = document.querySelector('.comparation-table .comparation-table__table').offsetHeight,
            offset = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({ top: offset - 100, behavior: 'smooth' });

    });
  
  }

});

document.addEventListener("change", (e) => {
  if(e.target.classList.contains('color_swatches__card-product')){
      let card_patern = e.target.closest('.card_product'),
          image_change = card_patern.querySelector('.image_product_card'),
          src_image = e.target.dataset.image;
         
      image_change.src = src_image;
  }
});

document.addEventListener("click", function(e) {
  if(e.target.classList.contains('btn_atc_landing')){
      let card = e.target.closest('.card_product'),
          color_swatches = card.querySelectorAll('.color_swatches__card-product'),
          quantity = card.querySelector('.product__quantity #quantity-input').value,
          dataVariant, formData = {};

      color_swatches.forEach((element)=>{

          if(element.checked){
              dataVariant = element.value;
          }
      } );

       console.log(dataVariant, quantity);

      formData = {
          'items': [
            {
              'id': dataVariant,
              'quantity': quantity
            }
          ]
        };

      fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'dataType': 'json'
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                CartDrawerSite.updateCartDrawer();
                CartDrawerSite.openCartDrawer();
                console.log('Added');
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
  }

  if(document.getElementById('product_buy')){
    let overlay = document.querySelector('.overlay_popup'), 
        tech_popup = document.querySelector('.tech_popups'), 
        devices_popup = document.querySelector('.compatible_popups'), 
        patern_close;
         
  
 
         if(e.target.classList.contains('tech_button')){  
             overlay.classList.toggle('hide_popup');
             tech_popup.classList.toggle('hide_popup');
             
         }else if(e.target.classList.contains('devices_button')){
             overlay.classList.toggle('hide_popup');
             devices_popup.classList.toggle('hide_popup');
             
         }else if(e.target.classList.contains('close_popup')){
             overlay.classList.toggle('hide_popup');
             patern_close = e.target.closest('.popup__container');
             patern_close.classList.toggle('hide_popup');
         }
    }  
});

document.querySelectorAll('.variant-images img').forEach(element => {

  element.addEventListener('click', (e) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  })

  element.addEventListener('touchend', (e) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  })

});